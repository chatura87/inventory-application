import {Component} from "@angular/core";
import {Product} from "./product";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList: Product[];

  constructor() {
    this.productList = [new Product("Product A", 500), new Product("Product B", 1000)];
  }
}
