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

        this.form = this.fb.group({
          category: [q.category, [Validators.required]],
          type: [q.type, [Validators.required]],
          difficulty: [q.difficulty, [Validators.required]],
          titleQuestion: [q.titleQuestion, [Validators.required]],
          correctAnswer: [q.correctAnswer, [Validators.required]],
          incorrectAnswers: this.fb.array([]),
        });
        this.addIncorrectAnswerFormGroup(q.incorrectAnswers.length);
    });
  }

  update(): void {
    const questionForUpdate: Question = {
      category: this.form.get('category')?.value,
      type: this.form.get('type')?.value,
      difficulty: this.form.get('difficulty')?.value,
      titleQuestion: this.form.get('titleQuestion')?.value,
      correctAnswer: this.form.get('correctAnswer')?.value,
      incorrectAnswers: [
        {
          incorrectAnswer: "Not to be"
        }
      ]
    }
    this.questionService.updateQuestionById(this.id, questionForUpdate)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  delete(): void {
    this.questionService.deleteById(this.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  //  =========== Must be corrected
  public addIncorrectAnswerFormGroup(length: number) {
    const incorrectAnswers = this.form.get('incorrectAnswers') as FormArray;
    console.log(incorrectAnswers.controls);
    console.log(this.form.get('incorrectAnswers')?.value);
    for (let i = 0; i < length; i++) {
      incorrectAnswers.push(this.createIncorrectAnswerFormGroup());
    }
  }

  private createIncorrectAnswerFormGroup(): FormGroup {
    return this.fb.group({
      incorrectAnswer: [''],
    });
  }
  //  =========== Must be corrected

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
