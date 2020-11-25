import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionService } from '../services/question.service';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-survey-paper',
  templateUrl: './survey-paper.page.html',
  styleUrls: ['./survey-paper.page.scss'],
})
export class SurveyPaperPage implements OnInit {
  private userId: number;
  private userName:string;
  private gender:string;
  private age:number;
  private schoolCode:string;
  public survey={};
  public surveyPaper:FormGroup;
  constructor(private alertCtrl: AlertController,private router: Router, private formBuilder: FormBuilder, private questionService: QuestionService,public http: HttpClient,private navCtrl:NavController) {
  
    this.questionService.answers.forEach(item => {
      this.survey[item.qId] = item.qAnswer;
    })
    this.surveyPaper = this.formBuilder.group(this.getControls());
  }
getControls(){
  let uId=this.questionService.getDbOptions()['userId'];
    this.userId = parseInt(uId);
    this.userName=this.questionService.getDbOptions()['userName'];
    let userAge=this.questionService.getDbOptions()['age'];
    this.age= parseInt(userAge);
    this.gender=this.questionService.getDbOptions()['gender'];
    this.schoolCode=this.questionService.getDbOptions()['schoolCode'];
  this.survey['userId']=this.userId;
  this.survey['userName']=this.userName;
  this.survey['age']=this.age;
  this.survey['gender']=this.gender;
  this.survey['schoolCode']=this.schoolCode;
  return this.survey;
}
  ngOnInit() {
    
  }
  navigateBack() {
    this.router.navigate(['question8']);
  }
  submitSurveyResult(){
    console.log(this.surveyPaper.value);
    let self=this;
    this.http.post('https://cteq-survey.herokuapp.com/api/surveyResult/save', 
    this.surveyPaper.value).subscribe((response) => {
        console.log(response);
        self.submitSurvey();
      });
  }
  async submitSurvey() {
    let userName=localStorage.getItem("userName");
    let self=this;
    const alert = await this.alertCtrl.create({
      message: 'Thanks '+userName+' for your valuable time to submit the survey',
      buttons: [
        {
          text: 'okay',
          handler: () => {
            self.navCtrl.navigateRoot('consent-page');
          }
        }
      ]
    });

    await alert.present();
  }
}
