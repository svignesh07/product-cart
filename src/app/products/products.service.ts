import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService {

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getProducts(path) {
    return this.http.get(`${this.baseUrl}${path}`)
      .map(res => res.json());
  }

  getProduct(path, id) {
    return this.http.get(`${this.baseUrl}${path}/${id}`)
      .map(res => res.json());
  }

  addProduct(path: string, product: Object = {}) {
    return this.http.post(`${this.baseUrl}${path}`, product)
      .map(res => res.json());
  }

  updateProduct(path, product, id) {
    return this.http.put(`${this.baseUrl}${path}/${id}`, product)
      .map(res => res.json());
  }

  deleteProduct(path, id) {
    return this.http.delete(`${this.baseUrl}${path}/${id}`)
      .map(res => res.json());
  }

}