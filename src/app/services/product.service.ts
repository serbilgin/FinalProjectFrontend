import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({ //http client i enjekte ettigimiz gibi bunu da edi
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://localhost:44344/api/products/getall';

  constructor(private httpClient: HttpClient) {
    // burda httpClient injecte edilmis oldu. import edilmesi yeterli degil
    // Ayrica constructer da verlen parametre sanki klasin icinde
    // tanimlanmis degisken gibi erisilebilir. Private o yuzden var

    // constructer sadece new ile obje olusturmak icin kullanilmali
   }

   getProducts() : Observable<ProductResponseModel>{
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); 
      //her seferinde this ile cagirmasinin sebebi: typescript arka plandda js ye donusturulur. Js de class yok, heralde en yakindaki
    //icin this kullaniliyor
  }
}
