import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../product";

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() childProduct: Product;
  @Output() productEmited: EventEmitter<Product>;

  constructor() {
    this.productEmited = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  getSelectedProduct(product: Product) {
    console.log(product);
    this.productEmited.emit(product);
  }

}
