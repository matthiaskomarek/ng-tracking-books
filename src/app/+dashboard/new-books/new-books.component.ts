import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss']
})
export class NewBooksComponent implements OnInit {
  total: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    const params = new URLSearchParams();
    params.set('filter', 'last24h');
    this.bookService.totalBooks(params)
      .subscribe((total) => {
      	this.total = total;
      });
  }

}
