import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Question } from "../../interfaces";
import { QuestionService } from "../../services";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  question!: Question;
  form!: FormGroup;
  formArray: FormArray = this.fb.array([]);
  private id!: number;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly questionService: QuestionService,
              private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$))
      .subscribe(( { questionData: q } ) => {
      this.question = q;
      this.id = q.id;

        q.incorrectAnswers.forEach(({incorrectAnswer}: any ) => {
          this.formArray.push(this.fb.control( incorrectAnswer));
        });
        console.log(this.formArray.getRawValue());
        this.form = this.fb.group({
          category: [q.category, [Validators.required]],
          type: [q.type, [Validators.required]],
          difficulty: [q.difficulty, [Validators.required]],
          titleQuestion: [q.titleQuestion, [Validators.required]],
          correctAnswer: [q.correctAnswer, [Validators.required]],
          incorrectAnswers: this.formArray,
        });
    });
  }

  update(): void {
    const questionForUpdate: Question = {
      category: this.form.get('category')?.value,
      type: this.form.get('type')?.value,
      difficulty: this.form.get('difficulty')?.value,
      titleQuestion: this.form.get('titleQuestion')?.value,
      correctAnswer: this.form.get('correctAnswer')?.value,
      incorrectAnswers: [],
    }
    this.formArray.getRawValue().forEach(fa=>questionForUpdate.incorrectAnswers.push({incorrectAnswer: fa}))

    this.questionService.updateQuestionById(this.id, questionForUpdate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  delete(): void {
    this.questionService.deleteById(this.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  //
  addIncorrectAnswersArray(): void {
    this.formArray.controls.push(this.fb.control( ''));
  }

  removeIncorrectAnswersArray(index: number): void {
    this.formArray.removeAt(index);
  };

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
