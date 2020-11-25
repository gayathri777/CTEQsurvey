import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.page.html',
  styleUrls: ['./question4.page.scss'],
})
export class Question4Page implements OnInit {
  private q4_task: string = '';
  private isError: boolean = false;
  private question4: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.q4_task = this.questionService.getDbOptions()['q4_task'];
    this.question4 = this.formBuilder.group({
      q4: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  navigateBack() {
    this.router.navigate(['question3']);
  }
  onNext() {
    console.log(this.question4.value.q4);
    if (this.question4.valid) {
      let ans: answer = {
        qId: "q4",
        question: "How good are you at " + this.q4_task + "?",
        qAnswer: this.question4.value.q4
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question5']);
    } else {
      this.isError = true;
    }

  }

}
