import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {
  private question1: FormGroup;
  private q1_task: string = '';
  private isError: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.q1_task = this.questionService.getDbOptions()['q1_task'];
    this.question1 = this.formBuilder.group({
      q1: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onNext() {
    if (this.question1.valid) {
      let ans: answer = {
        qId: "q1",
        question: "Do you konw what a " + this.q1_task + " is?",
        qAnswer: this.question1.value.q1
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question2']);
    } else {
      this.isError = true;
    }
    console.log(this.question1.value.q1);

  }
}
