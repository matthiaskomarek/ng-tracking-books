import { Component, OnInit } from '@angular/core';
import {IBook, BookService} from '../../shared/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: IBook;
  createResult: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.book = {
      asin: ''
    };
  }

  onSubmit() {
    this.createResult = null;
    console.log(this.book);
    this.bookService.create(this.book)
      .subscribe((result) => {
      	this.createResult = result;
      });
  }

}
