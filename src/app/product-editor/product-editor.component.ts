import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  name = new FormControl();
  price = new FormControl()

  ngOnInit() {
    this.name.setValue(this.product.name);
    this.price.setValue(this.product.price);
  }

}
