import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, first, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // take(1), // pegar apenas a primeira resposta e finalizar inscrição na origem de dados assim como o first()
      delay(2000),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }
}
