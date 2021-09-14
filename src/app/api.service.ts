import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private REST_API_GET_PRICE_LIST = "http://localhost:8081/price/list";
  private REST_API_GET_PRICE = "http://localhost:8081/price/{productName}/{type}/{qty}";

  constructor(private httpClient: HttpClient) { }

  public getPriceList(){
    return this.httpClient.get(this.REST_API_GET_PRICE_LIST);
  }

  public getPrice(productName: string, type: string, qty: string){
    return this.httpClient.get(this.REST_API_GET_PRICE.replace('{productName}', productName).replace('{type}', type).replace('{qty}', qty));
  }
}
