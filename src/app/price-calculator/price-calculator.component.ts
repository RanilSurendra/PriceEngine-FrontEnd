import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent implements OnInit {

  constructor(private api: ApiService) { }

  products = [
    { id: 'penguin-ears', name: "Penguin-ears" },
    { id: 'horse-shoe', name: "Horse-shoe" }
  ];

  priceCalForm: FormGroup;

  ngOnInit(): void {
    this.priceCalForm = new FormGroup({
      product: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      unitCount: new FormControl('', Validators.required),
      price: new FormControl('')
    });
  }

  calculatePrice() {
    this.api.getPrice(this.priceCalForm.controls.product.value, this.priceCalForm.controls.unit.value, this.priceCalForm.controls.unitCount.value).subscribe(
      (response) => {
        if (response) {
          let objCopy  = JSON.parse(JSON.stringify(response));
          this.priceCalForm.controls.price.setValue(objCopy.price);
        }
      },
      (error) => {
        console.log(error);
      });
  }

}
