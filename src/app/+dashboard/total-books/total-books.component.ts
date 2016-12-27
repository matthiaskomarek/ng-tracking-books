import { Component, OnInit } from '@angular/core';
import {BookService} from '../../shared/book.service';

@Component({
  selector: 'app-total-books',
  templateUrl: './total-books.component.html',
  styleUrls: ['./total-books.component.scss']
})
export class TotalBooksComponent implements OnInit {

  totalBooks: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.totalBooks()
      .subscribe((total) => {
        this.totalBooks = total;
      });
  }
}
