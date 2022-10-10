import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
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
  pages!: number[];
  page: number = 0;
  private visitedPages!: number[];
  @ViewChildren('button') private readonly buttons!: QueryList<ElementRef>;
  private quizForm!: QuizForm;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly dataService: DataService,
              private readonly quizService: QuizService) { }

  ngOnInit(): void {
    this.dataService.quizFormStorage.pipe(takeUntil(this.unsubscribe$)).subscribe(value => this.quizForm = value);

    if (this.quizForm) {
      this.quizService.getQuiz(this.quizForm)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => {
          this.quiz = value.results;
          this.pages = [...Array(value.results.length).keys()];
        });
    }
  }

  goPage(page: number): void {
    if (!this.visitedPages) this.visitedPages = [0];
    if (!this.visitedPages.includes(page)) this.visitedPages.push(page);

    this.buttons.forEach(({nativeElement: button}, index: number) => {
      if (index === page) {
        button.style.border = 'yellow solid thin';
        button.style.backgroundColor = 'lightblue';
      } else if (this.visitedPages.includes(index)) {
        button.style.backgroundColor = 'lightpink';
        button.style.border = 'transparent solid thin';
      }
    });

    // this.router.navigate(['questions']);
    this.page = page;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
