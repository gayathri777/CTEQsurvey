import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.page.html',
  styleUrls: ['./question6.page.scss'],
})
export class Question6Page implements OnInit {
  private q6_task: string = '';
  private isError: boolean = false;
  private technology: string = '';
  private question6: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.technology = this.questionService.getDbOptions()['technology'];
    this.q6_task = this.questionService.getDbOptions()['q6_task'];
    this.question6 = this.formBuilder.group({
      q6: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  navigateBack() {
    this.router.navigate(['question5']);
  }
  onNext() {
    console.log(this.question6.value.q6);
    if (this.question6.valid) {
      let ans: answer = {
        qId: "q6",
        question: "Have you ever " + this.q6_task + " on a " + this.technology + "?",
        qAnswer: this.question6.value.q6
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question7']);
    } else {
      this.isError = true;
    }

  }
}
