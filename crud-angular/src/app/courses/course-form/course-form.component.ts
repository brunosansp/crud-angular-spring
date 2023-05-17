import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = formBuilder.group({
      _id: [''],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      category: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => console.log(result),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this._snackBar.open('Curso salvo com sucesso.', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Error ao salvar curso.', '', {
      duration: 5000,
    });
  }
}
