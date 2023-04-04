import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      { _id: "1", name: "Angular", category: "Front-end" },
      { _id: "2", name: "Spring Boot", category: "Back-end" },
    ];
  }
}
