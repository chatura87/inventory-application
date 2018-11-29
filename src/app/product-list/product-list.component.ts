import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() childProductList: Product[];
  @Output() productEmited: EventEmitter<Product>;

  constructor() { 
    this.productEmited = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  getSelectedProduct(product: Product) {

    this.productEmited.emit(product);
  }

}
