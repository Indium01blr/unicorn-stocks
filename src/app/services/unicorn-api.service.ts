import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornApiService {


  apiurl = "";

  private http = inject(HttpClient);
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor() { }

  public GetStockDetails() : Observable<any>{
    return this.http.get(this.apiurl + '/api/GetStockList');
  }

  AddStocks(user:usertransaction){
    this.http.post(this.apiurl, user, { headers : this.headers });
  }

  public GetStockResults(): Observable<any>{
    return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
  }

}

export interface usertransaction {
  userName:string;
}
