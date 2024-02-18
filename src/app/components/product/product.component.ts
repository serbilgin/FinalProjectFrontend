import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
//import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataloaded:boolean = false;

  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
      }
    })
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(reponse=> {
        this.products = reponse.data;
        this.dataloaded = true;
      });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId)
      .subscribe(reponse=> {
        this.products = reponse.data;
        this.dataloaded = true;
      });
  }
}
