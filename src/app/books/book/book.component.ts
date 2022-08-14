import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart: Boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.isInCart = this.cartService.get().filter(b => b.name === this.book.name)?.length > 0 ? true : false;
  }

  addToCart(): void {
    if (this.isInCart) {
      this.isInCart = false;
      this.cartService.remove(this.book);
    } else {
      this.isInCart = true;
      this.cartService.add(this.book);
    }
  }
}
