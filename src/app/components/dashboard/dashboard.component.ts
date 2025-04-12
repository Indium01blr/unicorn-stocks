import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tabid = 'active-tab';
  activeTab = 'overview';

  tabs = [
    {
      id : "overview", label : 'Overview'
    }
  ];

  SetTab(tabid:string){
    this.activeTab = tabid;
  }

}
