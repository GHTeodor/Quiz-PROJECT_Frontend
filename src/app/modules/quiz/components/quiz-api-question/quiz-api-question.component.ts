import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-api-question',
  templateUrl: './quiz-api-question.component.html',
  styleUrls: ['./quiz-api-question.component.scss']
})
export class QuizApiQuestionComponent implements OnInit {
  @Input() quiz!: any;
  @Input() page!: number;
  answers!: any[];
  mistakes: number = 0;
  isCorrect: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const randomAnswersOrderArray = [...this.quiz.incorrect_answers];
    randomAnswersOrderArray.push(this.quiz.correct_answer);
    this.answers = randomAnswersOrderArray.sort(() => Math.random() - 0.5);
  }

  checkIsAnswerCorrect(e: Event): void {
    (e.target as any).disabled = {once: true};
    this.isCorrect = (e.target as HTMLButtonElement).innerText === this.quiz.correct_answer;
    if (this.isCorrect) {
      (e.target as HTMLButtonElement).style.border = "green solid thin";
      (e.target as HTMLButtonElement).style.color = "green";
    }
    else {
      this.mistakes++;
      (e.target as HTMLButtonElement).style.color = "red";
    }
  }
}
