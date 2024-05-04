import { Component, Input } from '@angular/core';
import { BookModel } from '../book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book: BookModel | null = null;
  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {}


  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBook(bookId).subscribe((book: BookModel) => {
      this.book = book;
    });


  }

}
