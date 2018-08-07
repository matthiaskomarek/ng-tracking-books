import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss']
})
export class NewBooksComponent implements OnInit {
  total: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.totalBooks({filter: 'last24h'})
      .subscribe((total) => {
        this.total = total;
      });
  }
}
