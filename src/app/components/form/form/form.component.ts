import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form!: FormGroup;
  public title: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this._createForm();
  }

  _createForm(): void {
    this.form = new FormGroup({
      title: new FormControl("Angular", [Validators.required, Validators.maxLength(80)])
    });
  }

  submit(): void {
    if (this.form.valid){
      this.title = this.form.get('title')?.value;

      this.router.navigate(['users']);

      this.form.reset();
    }
  }
}
