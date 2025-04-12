import { Component, Input, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UnicornApiService } from '../../services/unicorn-api.service';

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

  stockDetails:any;
    constructor(private apiService : UnicornApiService){}
    ngOnInit() {
      this.apiService.GetStockResults().subscribe(data =>{
        if(data){
          console.log(data);
          this.stockDetails = data;
        }
      });
    }

}
