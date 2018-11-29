import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { TestService } from "services/test.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  productList: Product[];
  product: Product;

  constructor(private testService: TestService) { }

  ngOnInit() {

    this.testService.getAllProducts().subscribe(data => {
      console.log(data);
      this.productList = data
    });
  }

  getSelectedProduct(product: Product) {
    this.product = product;
    console.log(product+'fdfd');
  }
}
