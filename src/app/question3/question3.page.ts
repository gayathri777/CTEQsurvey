import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {
  private q3_task:string='';
  private isError:boolean=false;
  private question3: FormGroup;
  private options:any=[];
  constructor(private router:Router, private formBuilder: FormBuilder, private questionService: QuestionService,private http:HttpClient) {
    let schoolCode:string=this.questionService.getDbOptions()['schoolCode'];
    let self=this;
    this.http.get('https://cteq-survey.herokuapp.com/api/getQuesOptions/q3/'+schoolCode).subscribe(data => {
      this.options=data;
      console.log(this.options);
    });
    this.q3_task=this.questionService.getDbOptions()['q3_task'];
    this.question3 = this.formBuilder.group({
      q3: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  navigateBack(){
    this.router.navigate(['question2']);
  }
  onNext() {
    console.log(this.question3.value.q3);
    if (this.question3.valid) {
      let ans: answer = {
        qId: "q3",
        question:"How many "+ this.q3_task+" last week?",
        qAnswer: this.question3.value.q3
      }
      this.questionService.submitAnswers(ans);
      this.router.navigate(['question4']);
    }else{
      this.isError=true;
    }
   
  }


}
