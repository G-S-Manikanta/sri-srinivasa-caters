import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonialsUrl = 'assets/testimonials.json';

  constructor(private http: HttpClient) { }

  getTestimonialsData(): Observable<any> {
    return this.http.get<any>(this.testimonialsUrl);
  }
}
