import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = 'http://localhost:8080/book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book);
  }

  updateBook(book: Book) {
    return this.http.put(this.apiURL, book)
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`)
  }
}
