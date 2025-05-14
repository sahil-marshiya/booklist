import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Book, GoogleBooksApiInterface } from '../models/google-api.interface';

@Injectable({
  providedIn: 'root',
})
export class GoogleBookService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getFoulingBooks(): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${this.API_URL}?q=fouling`)
      .pipe(map((data: GoogleBooksApiInterface) => data.items));
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${this.API_URL}?q=${query}`)
      .pipe(
        map((data) => data.items || []),
        catchError((error) => {
          console.error('Error fetching books:', error);
          return of([]);
        })
      );
  }

  getBookById(id: string): Observable<Book | null> {
    return this.http.get<Book>(`${this.API_URL}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching book by ID:', error);
        return of(null);
      })
    );
  }
}
