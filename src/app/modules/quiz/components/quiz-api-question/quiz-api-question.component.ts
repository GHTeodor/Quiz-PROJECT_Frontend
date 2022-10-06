import {Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren} from '@angular/core';

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
  question!: any;
  answers!: any[];
  mistakes: number = 0;
  isCorrect: boolean = false;

  constructor() { }

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
}
