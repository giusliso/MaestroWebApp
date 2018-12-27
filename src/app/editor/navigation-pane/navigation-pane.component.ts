import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-pane',
  templateUrl: './navigation-pane.component.html',
  styleUrls: ['./navigation-pane.component.scss']
})

export class NavigationPaneComponent {
  
    items: MenuItem[];
    constructor(private router: Router){

    }

    onselect(event){

    }

    ngOnInit() {
      
        this.items = [
            {
              label: 'Scene',
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('scena');
              }
            },
            {
              label: 'Scenario',
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('scenario');
              }
            },
           {
              label: 'Learning-Paths',
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('learning-path');
              }
            },
            {
              label: 'Targets',
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('target');
              }
            },
            {
              label: 'Contents',
              icon: 'pi pi-fw pi-cog'
            }
        ];
    }
}
