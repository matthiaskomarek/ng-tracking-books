import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './+dashboard/dashboard.component';
import { TotalBooksComponent } from './+dashboard/total-books/total-books.component';
import {BookService} from './shared/book.service';
import {SearchComponent} from './+book/search/search.component';
import {DetailComponent} from './+book/detail/detail.component';
import { CreateComponent } from './+book/create/create.component';
import { NewBooksComponent } from './+dashboard/new-books/new-books.component';

const appRoutes: Routes = [
  { path: 'book/create', component: CreateComponent },
  { path: 'book/:id', component: DetailComponent },
  { path: '',
    pathMatch: 'full',
    component: DashboardComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TotalBooksComponent,
    SearchComponent,
    DetailComponent,
    CreateComponent,
    NewBooksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
