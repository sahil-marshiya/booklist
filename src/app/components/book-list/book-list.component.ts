import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../../services/google-book.service';
import { Book } from '../../models/google-api.interface';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  imports: [RouterModule, CommonModule, HttpClientModule],
  standalone: true,
})
export class BookListComponent implements OnInit {
  books$!: Observable<Book[]>;
  loading = true;
  error = '';

  constructor(private bookService: GoogleBookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getFoulingBooks();
    this.books$.subscribe({
      next: () => (this.loading = false),
      error: (err) => {
        this.error = 'Failed to load books.';
        this.loading = false;
      },
    });
  }
}
