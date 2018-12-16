import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.scss']
})

export class NavigationPaneComponent {
  
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
              label: 'Scene',
              icon: 'pi pi-fw pi-cog'
            },
            {
              label: 'Learning-Paths',
              icon: 'pi pi-fw pi-cog'
            },
            {
              label: 'Targets',
              icon: 'pi pi-fw pi-cog'
            }
        ];
    }
}
