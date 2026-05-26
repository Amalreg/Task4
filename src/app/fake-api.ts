import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakeApi {
  constructor(private http: HttpClient) { }
  getFakeProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getFakeProductById(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
