import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  private _product: Product;
  @Input() set product(value: Product) {
    this._product = value;
    this.setFormValues(value);

  }

  constructor() {
  }

  formGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });

  setFormValues(product: Product) {
    this.formGroup.patchValue({
      name: product.name,
      price: product.price
    })
  }


  ngOnInit() { }

}
