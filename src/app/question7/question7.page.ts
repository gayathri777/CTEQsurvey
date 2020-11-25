import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.page.html',
  styleUrls: ['./question7.page.scss'],
})
export class Question7Page implements OnInit {
  private q7_task: string = '';
  private isError: boolean = false;
  private n: number = 3;
  private question7: FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder, private questionService: QuestionService,private navCtrl:NavController) {
    this.q7_task = this.questionService.getDbOptions()['q7_task'];
    let num=this.questionService.getDbOptions()['n'];
    this.n=parseInt(num);
    this.question7 = this.formBuilder.group({
      q7: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  navigateBack(){
    this.router.navigate(['question6']);
  }
  onNext() {
    console.log(this.question7.value.q7);
    if (this.question7.valid) {
      let ans: answer = {
        qId: "q7",
        question:"Try to name "+this.n+" other pieces of equipment you have used to "+this.q7_task+"?",
        qAnswer: this.question7.value.q7
      }
      this.questionService.submitAnswers(ans);
      this.navCtrl.navigateForward('/survey-paper');
     // this.router.navigate(['survey-paper']);
    }else{
      this.isError=true;
    }
    
  }

}
