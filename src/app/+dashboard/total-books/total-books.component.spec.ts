/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TotalBooksComponent } from './total-books.component';

describe('TotalBooksComponent', () => {
  let component: TotalBooksComponent;
  let fixture: ComponentFixture<TotalBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
