import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products')
    .pipe(
      tap(product => console.log(product)))      
  }
}
