import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { HttpClient } from '@angular/common/http';
import { user } from '../interfaces/user';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private login: FormGroup;
  isAgeValid:boolean=true;
  private user: user = { userId: 0, userName: '', gender: '', schoolCode: '', age: 0 };
  constructor(private formBuilder: FormBuilder, private router: Router, private questionService: QuestionService, public http: HttpClient, private alertCtrl: AlertController) {
    this.login = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      code: ['', Validators.required]
    });
  }
  logForm() {
    let age = this.login.value['age'];
    if(parseInt(age)>5 && parseInt(age)<18){
      this.isAgeValid=true;
    }else{this.isAgeValid=false;}
    if (this.login.valid&&this.isAgeValid==true) {
      this.user['userId'] = 0;
      this.user['userName'] = this.login.value['name'];
      this.user['gender'] = this.login.value['gender'];
      
      this.user['age'] = parseInt(age);
      this.user['schoolCode'] = this.login.value['code'];
      let self = this;
      this.http.post('https://cteq-survey.herokuapp.com/api/userLogin/login', this.user).subscribe((response) => {
        if (response) {
          localStorage.setItem("userName",self.user.userName);
          self.questionService.setDbOptions(response);
          self.router.navigate(['question1']);
        } else {
          self.showError();
        }
        
      });
      console.log(this.login);

    } else {
      this.login.controls.age.markAsTouched();
      this.login.controls.name.markAsTouched();
      this.login.controls.gender.markAsTouched();
      this.login.controls.code.markAsTouched();
      console.log(this.login)
    }

  }
  async showError() {
    let self = this;
    let uName=this.user.userName;
    const alert = await this.alertCtrl.create({
      message: "Sorry "+uName+', No survey available for this school code.Please enter correct school code',
      buttons: ['okay']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
