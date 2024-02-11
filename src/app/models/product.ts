export interface Product{     //export, c# da public karsiligi/ isimlendirmade 'I' kullanilmiyor
    //front end de, soyutlama back end kadar etkili degil. Daha cok obje icerigini sinirlandirmak icin kullaniliyor
    productId:number;   //number=int
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number
}