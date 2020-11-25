import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.page.html',
  styleUrls: ['./question9.page.scss'],
})
export class Question9Page implements OnInit {

  private technology: string = '';
  private question9: FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder, private questionService: QuestionService) {
    this.question9 = this.formBuilder.group({
      q9: ['', Validators.required]
    });
  }
 
  ngOnInit() {
    this.technology = this.questionService.getSurveyTech();
  }
  navigateBack(){
    this.router.navigate(['question8']);
  }
  onNext() {
    console.log(this.question9.value.q9);
    let ans: answer = {
      qId: "q9",
      question:"can you write down 3 things that you use your "+this.technology+" for?",
      qAnswer: this.question9.value.q9
    }
    this.questionService.submitAnswers(ans);
    this.router.navigate(['survey-paper']);
  }
 

}
