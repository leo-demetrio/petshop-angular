import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }
  getProducts() {
  return this.http.get<Product[]>(`${this.url}/products`)
    .pipe(
      tap(product => console.log(product)))      
  }
  authenticate(data: any) {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }
}
