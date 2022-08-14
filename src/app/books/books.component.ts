import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isShowing: boolean = true;
  books: Book[] = [];
  constructor(private bookService: BooksService, private authService: AuthService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}
