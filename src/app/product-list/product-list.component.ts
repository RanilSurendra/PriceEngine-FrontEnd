import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export interface Product {
  noOfUnits: number;
  priceHorseShoe: number;
  pricePenguinEars: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  displayedColumns: string[] = ['units', 'penguinEars', 'horseshoe'];
  dataSource = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPriceList();
  }

  getPriceList() {
    this.api.getPriceList().subscribe(
      (response) => {
        if (response) {
          let objCopy  = JSON.parse(JSON.stringify(response));
          this.dataSource = objCopy.priceList;
        }
      },
      (error) => {
        console.log(error);
      });
  }

}
