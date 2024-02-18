import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({ //http client i enjekte ettigimiz gibi bunu da edi
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://localhost:44344/api/';

  constructor(private httpClient: HttpClient) {
    // burda httpClient injecte edilmis oldu. import edilmesi yeterli degil
    // Ayrica constructer da verlen parametre sanki klasin icinde
    // tanimlanmis degisken gibi erisilebilir. Private o yuzden var

    // constructer sadece new ile obje olusturmak icin kullanilmali
   }

   getProducts() : Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath); 
      //her seferinde this ile cagirmasinin sebebi: typescript arka plandda js ye donusturulur. Js de class yok, heralde en yakindaki
    //icin this kullaniliyor
  }

  getProductsByCategory(categoryId:number) : Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryid=" + categoryId ;
    return this.httpClient.get<ListResponseModel<Product>>(newPath); 
  }
}
