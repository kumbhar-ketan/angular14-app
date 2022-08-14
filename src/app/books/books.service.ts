import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean code',
        author: "Robert C Martin",
        image: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
        amount: 700
      },
      {
        name: '201 Python Programming Exercises',
        author: "Edcorner Learning",
        image: "https://m.media-amazon.com/images/I/61TfJGc3aGL._AC_UY218_.jpg",
        amount: 800
      },
      {
        name: 'Implementing Effective Code Reviews',
        author: 'Giuliana Carullo',
        image: 'https://m.media-amazon.com/images/I/61x2rfI94TL._AC_UY218_.jpg',
        amount: 3748
      }
    ];
  }
}
