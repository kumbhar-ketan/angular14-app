import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = []

  constructor() { }

  get() {
    return this.cart;
  }

  add(book: Book) {
    this.cart.push(book);
  }
}
