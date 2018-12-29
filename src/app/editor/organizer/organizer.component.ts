import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { LayoutStoreModule, LayoutStoreActions } from 'src/app/store/layout-store';
import {MenuItem} from 'primeng/api';
import { Store, select } from '@ngrx/store';
import {State as LayoutState} from 'src/app/store/layout-store/reducer';
import { Actions, ofType } from '@ngrx/effects';
import { LayoutActionTypes, AddItemAction, ItemSelectAction, DeleteItemAction, UpdateItemAction } from 'src/app/store/layout-store/actions';
import { ContextMenu } from 'primeng/contextmenu';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  @Input()
  props: SelectItem[] = [];

  @Input()
  contextMenuProps: MenuItem[] = [];
  selecteditem: any;

  @ViewChild(ContextMenu)
  contextMenu: ContextMenu;

  public rightClickedNode;
  private  previoustItemSelected:any;

  constructor(
    private layoutStore: Store<LayoutState>,
    private update$: Actions,
  ) {
    this.update$.pipe(ofType(LayoutActionTypes.AddItem))
      .subscribe(
        (node: AddItemAction) => {
          this.props.push(node.payload.item);
          this.props = [...this.props];
          this.selectItem(node.payload.item)
        }
      );

    this.update$.pipe(ofType(LayoutActionTypes.DeleteItem))
      .subscribe(
        (node: DeleteItemAction) => {

          const itemToRemove = this.props.indexOf(node.payload.item);
          this.props.splice(itemToRemove,1);
          this.props = [...this.props];
          if(this.props.length > 0 && this.props.indexOf(this.previoustItemSelected) > -1){
            this.selectItem(this.previoustItemSelected);
          }
         
        }
      );

    // this.update$.pipe(ofType(LayoutActionTypes.AddItem))
    // .subscribe(
    //   (node: UpdateItemAction) => {
    //     const itemToUpdate = this.props.indexOf(this.selecteditem);
    //     this.props[itemToUpdate] = node.payload.item;
    //     this.props = [...this.props];
    //     this.selectItem(node.payload.item)
    //   }
    // );
  }

  isContextMenuVisible(): boolean {
    if((this.props === [] || this.props === undefined) ||
    (this.contextMenuProps === [])){
      return false
    }
    return true;
  }

  select(item){
    this.selectItem(item.value);
  }

  selectItem(itemToSelect:any){
    this.previoustItemSelected = this.selecteditem;
    this.selecteditem = itemToSelect;
    this.layoutStore.dispatch(new ItemSelectAction({item: itemToSelect}));
  }

  ngOnInit() {
  }

}
