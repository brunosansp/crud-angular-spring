import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Course } from "../model/course";
import { delay, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private readonly API = "./../../../assets/courses.json";
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      // first(),
      take(1), // pegar apenas a primeira resposta e finalizar inscrição na origem de dados assim como o first()
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
