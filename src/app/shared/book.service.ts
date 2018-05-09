import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/internal/operators";

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

  constructor(private http: HttpClient) { }

  get(asin: string): Observable<IBook> {
    return this.http.get(`${environment.API_URL}/book/${asin}`)
      .map((response: any) => {
        return response.data;
      });
  }

  list(): any {

  }

  create(data: IBook): Observable<any> {
    return this.http.post(`${environment.API_URL}/book`, data);
  }

  update(data: any): any {

  }

  delete(asin: string): any {

  }

  totalBooks(params: any = {}): Observable<number> {
    return this.http.get<any>(`${environment.API_URL}/book/total`, {params})
      .pipe(
        map(response => {
          if (response.success) {
            return response.data.total;
          }

          return 0
        })
      );
  }
}
