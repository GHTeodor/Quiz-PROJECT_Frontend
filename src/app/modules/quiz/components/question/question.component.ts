import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { Question } from "../../interfaces";
import { QuestionService } from "../../services";
import { Category, Difficulty, Type } from "../../interfaces/enums";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  question!: Question;
  // form!: FormGroup;
  private id!: number;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly questionService: QuestionService,
              /*private readonly fb: FormBuilder*/) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe(( { questionData } ) => {
      this.question = questionData;
      this.id = questionData.id;
    });

    // this.form = this.fb.group({
    //   category: ['', [Validators.required]],
    //   type: ['', [Validators.required]],
    //   difficulty: ['', [Validators.required]],
    //   titleQuestion: ['', [Validators.required]],
    //   correctAnswer: ['', [Validators.required]],
    //   incorrectAnswers: this.fb.array([{incorrectAnswer: ['']}])
    // });
    // console.log("FORM:=============",this.form);
  }

  update(): void {
    const questionForUpdate: Question = {
      category: Object.keys(Category)[Object.values(Category).indexOf(Category.Books)],
      type: Type.Multiple.toString(),
      difficulty: Difficulty.Easy.toString(),
      titleQuestion: "To be, or not to be",
      correctAnswer: "To be",
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

  // get incorrectAnswers(): any {
  //   return this.form.controls["incorrectAnswers"] as FormArray;
  // }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
