import { Component, OnInit, ViewChild } from '@angular/core';
import {
  LayoutStoreModule,
  LayoutStoreActions
} from 'src/app/store/layout-store';
import { Store, select } from '@ngrx/store';
import { State as LayoutState } from 'src/app/store/layout-store/reducer';
import { Content } from '../../../../api';
import { ContentState } from '../../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { Area } from 'src/app/core';
import {
  CreateContent,
  UpdateContent,
  DeleteContent,
  ContentActionTypes
} from '../../actions';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ContentDetailsComponent } from '../content-details';
import {
  LayoutActionTypes,
  ItemSelectAction,
  DetailsPersistAction,
  LandMarkSetAction,
  UpdateItemAction,
  DeleteItemAction
} from 'src/app/store/layout-store/actions';
import { ContentCreateDialogComponent } from '../content-create-dialog';

@Component({
  selector: 'lib-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.scss']
})
export class ContentAreaComponent implements OnInit {
  public organizerProps = [];
  public currentScene;
  @ViewChild(ContentDetailsComponent)
  detailsArea: ContentDetailsComponent;

  @ViewChild(ContentCreateDialogComponent)
  createScenaDialog: ContentCreateDialogComponent;

  public menuProps = [
    {
      label: 'File',
      items: [{ label: 'New Content', command: () => this.createContent() }]
    }
  ];

  public contextMenu = [
    {
      name: 'Delete Content',
      visible: item => {
        return true;
      },
      enabled: true,
      execute: node => this.deleteContent(node.item)
    }
  ];
  private _subscriptions: Subscription[] = [];
  constructor(
    private layoutStore: Store<LayoutState>,
    private ContentStore: Store<Content>,
    private update$: Actions
  ) {
    // Load contents
    this.layoutStore
      .pipe(
        first(),
        select('layout', 'currentScene')
      )
      .subscribe(scene => (this.currentScene = scene));
    this.ContentStore.pipe(
      first(),
      select('content', 'content')
    ).subscribe(contents =>
      contents
        .filter(target => target.sceneId === this.currentScene.value.id)
        .forEach((content: Content) => {
          this.organizerProps.push({
            value: { id: content.contentId, name: content.name }
          });
        })
    );

    // Subscription when scenario is updated
    this._subscriptions.push(
      this.update$
        .pipe(ofType(ContentActionTypes.UpdateContent))
        .subscribe((content: UpdateContent) => {
          this.layoutStore.dispatch(
            new UpdateItemAction({
              item: {
                value: {
                  id: content.payload.content.contentId,
                  name: content.payload.content.name
                }
              }
            })
          );
          this.layoutStore.dispatch(new DetailsPersistAction({ item: null }));
        })
    );

    // subscription when new scenario is created.
    this._subscriptions.push(
      this.update$
        .pipe(ofType(ContentActionTypes.CreateContent))
        .subscribe((content: CreateContent) =>
          this.fillOrganizer(content.payload.content)
        )
    );

    // Subscription for update details
    this._subscriptions.push(
      this.update$
        .pipe(ofType(LayoutActionTypes.ItemSelect))
        .subscribe((selection: ItemSelectAction) => {
          this.ContentStore.pipe(select('content', 'content')).subscribe(
            (contents: Content[]) => {
              const content = contents.find(
                content => content.contentId === selection.payload.item.value.id
              );
              this.detailsArea.updateChilds(content);
            }
          );
        })
    );
  }

  public save(event: Event) {
    this.detailsArea.save();
  }

  public revert(event: Event) {
    this.detailsArea.revert();
    this.layoutStore.dispatch(new DetailsPersistAction({ item: undefined }));
  }

  createContent() {
    this.createScenaDialog.showDialog();
  }

  fillOrganizer(content: Content) {
    this.layoutStore.dispatch(
      new LayoutStoreActions.AddItemAction({
        item: { value: { id: content.contentId, name: content.name } }
      })
    );
  }

  ngOnInit() {
    this.layoutStore.dispatch(
      new LayoutStoreActions.CurrentAreaAction({ area: Area.Contents })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private deleteContent(node) {
    this.ContentStore.pipe(
      first(),
      select('content', 'content')
    ).subscribe((contents: Content[]) => {
      const content = contents.find(item => item.contentId === node.id);
      this.ContentStore.dispatch(new DeleteContent({ content: content }));
      this.layoutStore.dispatch(new DeleteItemAction({ item: node }));
    });
  }
}
