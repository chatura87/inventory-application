import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class TestService {

private _url: string = '/assets/data/products.json'

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this._url);
  }
}
