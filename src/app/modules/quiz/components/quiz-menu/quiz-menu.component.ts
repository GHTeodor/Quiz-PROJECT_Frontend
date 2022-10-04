import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { QuizService } from "../../services";
import { DataService } from "../../../../shared";
import { QuizForm } from "../../interfaces";

@Component({
  selector: 'app-quiz-menu',
  templateUrl: './quiz-menu.component.html',
  styleUrls: ['./quiz-menu.component.scss']
})
export class QuizMenuComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly router: Router,
              private readonly quizService: QuizService,
              private readonly dataService: DataService) {  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      amount: new FormControl(10, [Validators.required, Validators.min(1), Validators.max(50)]),
      category: new FormControl(""),
      difficulty: new FormControl(""),
      type: new FormControl("")
    });
  }

  submit() {
    if (this.form.valid) {
      const quizForm: QuizForm = {
        amount: this.form.get('amount')?.value,
        category: this.form.get('category')?.value,
        difficulty: this.form.get('difficulty')?.value,
        type: this.form.get('type')?.value
      }

      this.dataService.storage.next(quizForm);

      this.router.navigate(['questions/api-questions']);
    }
  }
}
