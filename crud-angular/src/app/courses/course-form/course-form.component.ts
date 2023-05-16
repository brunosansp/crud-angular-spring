import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      _id: [""],
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      category: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    throw new Error("Method not implemented.");
  }

  onCancel() {
    throw new Error("Method not implemented.");
  }
}
