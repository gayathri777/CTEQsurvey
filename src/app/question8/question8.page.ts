import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { answer } from '../interfaces/answer';
import { Question9Page } from '../question9/question9.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.page.html',
  styleUrls: ['./question8.page.scss'],
})
export class Question8Page implements OnInit {
 private technology: string = '';
 private question8: FormGroup;
 constructor(private router:Router, private formBuilder: FormBuilder, private questionService: QuestionService,private navCtrl:NavController) {
   this.question8 = this.formBuilder.group({
     q8: ['', Validators.required]
   });
 }

 ngOnInit() {
   this.technology = this.questionService.getSurveyTech();
 }
 navigateBack(){
   this.router.navigate(['question7']);
 }
 onNext() {
   console.log(this.question8.value.q8);
   let ans: answer = {
     qId: "q8",
     question:"Have you ever carried out a task on a "+this.technology+"?",
     qAnswer: this.question8.value.q8
   }
   this.questionService.submitAnswers(ans);
   this.navCtrl.navigateForward('/question9');
  // this.router.navigate(['question9']);
 }


}
