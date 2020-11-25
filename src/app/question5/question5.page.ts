import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {
  private q5_task: string = '';
  private isError: boolean = false;
  private question5: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.q5_task = this.questionService.getDbOptions()['q5_task'];
    this.question5 = this.formBuilder.group({
      q5: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  navigateBack() {
    this.router.navigate(['question4']);
  }
  onNext() {
    console.log(this.question5.value.q5);
    if (this.question5.valid) {
      let ans: answer = {
        qId: "q5",
        question: " How much do you enjoy " + this.q5_task + "?",
        qAnswer: this.question5.value.q5
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question6']);
    } else {
      this.isError = true;
    }

  }

}
