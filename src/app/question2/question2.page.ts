import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {
  private q2_task: string = '';
  private isError: boolean = false;
  private question2: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.q2_task = this.questionService.getDbOptions()['q2_task'];
    this.question2 = this.formBuilder.group({
      q2: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  navigateBack() {
    this.router.navigate(['question1']);
  }
  onNext() {
    console.log(this.question2.value.q2);
    if (this.question2.valid) {
      let ans: answer = {
        qId: "q2",
        question: "Have you ever " + this.q2_task + "?",
        qAnswer: this.question2.value.q2
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question3']);
    } else {
      this.isError = true;
    }

  }

}
