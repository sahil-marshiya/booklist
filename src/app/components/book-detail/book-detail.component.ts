import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBookService } from '../../services/google-book.service';
import { Book } from '../../models/google-api.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: GoogleBookService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe({
        next: (book) => {
          this.book = book;
          this.loading = false;
        },
        error: () => {
          this.error = 'Failed to load book details.';
          this.loading = false;
        },
      });
    }
  }
}
