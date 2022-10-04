import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { DataService } from "../../../../shared";
import { QuizService } from "../../services";
import { QuizForm } from "../../interfaces";

@Component({
  selector: 'app-quiz-api-questions',
  templateUrl: './quiz-api-questions.component.html',
  styleUrls: ['./quiz-api-questions.component.scss']
})
export class QuizApiQuestionsComponent implements OnInit, OnDestroy {
  quiz!: any[];
  private quizForm!: QuizForm;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly dataService: DataService,
              private readonly quizService: QuizService) {
  }

  ngOnInit(): void {
    this.dataService.storage.pipe(takeUntil(this.unsubscribe$)).subscribe(value => this.quizForm = value);

    if (this.quizForm) {
      this.quizService.getQuiz(this.quizForm)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => {
          this.quiz = value.results;
          if (!value.results.length) this.router.navigate(['questions']);
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
