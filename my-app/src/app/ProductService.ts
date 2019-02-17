import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'Rxjs/Rx';
import 'rxjs/Rx';
// import { User } from './login/login.component';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ProductService {
  constructor (
    private http: Http
  ) {}

  getProduct() {
    return this.http.get('http://localhost:54934/api/Product/Get').map((res:Response) => res.json());
  }
  // postProduct(Product: Product) {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.post('http://localhost:54934/api/Product/Post', Product, options).map((res:Response) => res.json());
  // }
  deleteProduct(name: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let Url = 'http://localhost:54934/api/Product/'+name;
    console.log(Url);
    return this.http.delete(Url);
  }
}
