import { DataService } from './../../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {

  public products$: Observable<any[]>;

  constructor(
    private data: DataService
  ) { 
  
  }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
    this.showProducts()
  }
  showProducts(){
    console.log(this.products$)
  }

}
