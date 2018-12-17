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
      console.log("cliccato");
    }

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
              icon: 'pi pi-fw pi-cog',
              command: (event) => { 
                this.router.navigateByUrl('target');
              }
            }
        ];
    }
}
