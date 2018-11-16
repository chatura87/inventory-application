import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../product";

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() childProduct: Product;

  constructor() { }

  ngOnInit() {
  }

}
