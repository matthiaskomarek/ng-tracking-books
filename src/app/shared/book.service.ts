import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IBook {
  title: string;
  _id: string;
  author: string;
  createdAt: string;
  currentPrice: number;
  currentRank: number;
  prevRank: number;
  lastHistoryUpdate: string;
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

  create(data: any): any {

  }

  update(data: any): any {

  }

  delete(asin: string): any {

  }

  totalBooks(): Observable<number> {
    return this.http.get(`${environment.API_URL}/book/total`)
      .map(response => response.json())
      .map(response => {
        if (response.success) {
          return response.data.total;
        }

        return 0
      });
  }
}
