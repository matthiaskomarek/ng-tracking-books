import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IBook {
  title?: string;
  _id?: string;
  asin: string;
  author?: string;
  createdAt?: string;
  currentPrice?: number;
  currentRank?: number;
  prevRank?: number;
  lastHistoryUpdate?: string;
  isbn?: string;
  label?: string;
  lang?: string;
  cat1?: string;
  cat1Id?: string;
  cat2?: string;
  cat2Id?: string;
  pages?: number;
  rating?: number;
  reviews?: number;
  kindleUnlimited?: boolean;
  drm?: boolean;
}

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  get(asin: string): Observable<IBook> {
    return this.http.get(`${environment.API_URL}/book/${asin}`)
      .map((response: any) => {
        response = response.json();
        return response.data;
      });
  }

  list(): any {

  }

  create(data: IBook): Observable<any> {
    return this.http.post(`${environment.API_URL}/book`, data)
      .map(response => response.json())
  }

  update(data: any): any {

  }

  delete(asin: string): any {

  }

  totalBooks(search: URLSearchParams = new URLSearchParams()): Observable<number> {
    return this.http.get(`${environment.API_URL}/book/total`, {search})
      .map(response => response.json())
      .map(response => {
        if (response.success) {
          return response.data.total;
        }

        return 0
      });
  }
}
