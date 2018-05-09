import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  asin = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/book', this.asin]);
  }

}
