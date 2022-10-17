import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

import { QuestionService } from "../../services";
import { ApiQuestion, Question } from "../../interfaces";
import { AddQuizBarComponent } from "../add-quiz-bar/add-quiz-bar.component";

@Component({
  selector: 'app-quiz-api-question',
  templateUrl: './quiz-api-question.component.html',
  styleUrls: ['./quiz-api-question.component.scss']
})
export class QuizApiQuestionComponent implements OnInit, OnChanges {
  @Input() quiz!: any;
  @Input() page!: number;
  @Input() index!: number;
  @ViewChildren('button') private readonly buttons!: QueryList<ElementRef>;
  question!: ApiQuestion;
  answers!: any[];
  mistakes: number = 0;
  isCorrect: boolean = false;

  constructor(private readonly questionService: QuestionService,
              private readonly _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.index === this.page) this.question = this.quiz;

    const randomAnswersOrderArray = [...this.quiz.incorrect_answers];
    randomAnswersOrderArray.push(this.quiz.correct_answer);
    this.answers = randomAnswersOrderArray.sort(() => Math.random() - 0.5);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.index === this.page) this.question = this.quiz;
    const randomAnswersOrderArray = [...this.quiz.incorrect_answers];
    randomAnswersOrderArray.push(this.quiz.correct_answer);
    this.answers = randomAnswersOrderArray.sort(() => Math.random() - 0.5);

  }

  checkIsAnswerCorrect(index: number): void {
    const button: HTMLButtonElement = this.buttons.get(index)?.nativeElement;

    this.isCorrect = button.innerText === this.quiz.correct_answer;

    button.disabled = true;
    button.style.color = "white";

    if (this.isCorrect) {
      button.style.backgroundColor = "green";
      button.style.border = "green solid thin";
    } else {
      this.mistakes++;
      button.style.backgroundColor = "red";
    }
  }

  addToFavourite(): void {
    console.log(this.question);
    const question: Question = {
      category: this.question.category,
      type: this.question.type,
      difficulty: this.question.difficulty,
      titleQuestion: this.question.question,
      correctAnswer: this.question.correct_answer,
      incorrectAnswers: []
    };
    this.question.incorrect_answers.forEach(q => question.incorrectAnswers.push({incorrectAnswer: q}));

    this.questionService.addQuestion(question).subscribe();
    this._snackBar.openFromComponent(AddQuizBarComponent, {
      duration: 1500,
    });
  }
}
