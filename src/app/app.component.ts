import { Component } from '@angular/core';
import { BookModel } from './book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Catalog App';
  selectedBook: BookModel | null = null;

  // Event handler to set the selected book

  constructor(private router: Router) {}

  selectBook(book: BookModel): void {
    this.router.navigateByUrl('/details/' + book.id);
  }

}
