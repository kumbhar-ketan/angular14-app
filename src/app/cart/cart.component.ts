import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getCartItems() {
    return this.cartService.get();
  }

  removeFromCart(book: Book) {
    this.cartService.remove(book);
  }

}
