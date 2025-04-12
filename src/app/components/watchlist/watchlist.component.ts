import { Component } from '@angular/core';
import { UnicornApiService } from '../../services/unicorn-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  imports: [],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css'
})
export class WatchlistComponent {

  stockDetails:any;
  constructor(private apiService : UnicornApiService){}
  ngOnInit() {
    console.log("metghod calling");
    this.apiService.GetStockResults().subscribe(data =>{
      if(data){
        console.log(data);
        this.stockDetails = data;
      }
    });
  }
}
