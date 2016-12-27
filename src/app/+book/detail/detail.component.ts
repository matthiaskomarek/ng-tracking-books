import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BookService, IBook} from '../../shared/book.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book: IBook;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.bookService.get(params['id']))
      .subscribe((book: IBook) => {
        console.log(book);
        this.book = book;
      });
  }

}
