import { Injectable } from '@angular/core';
import { answer } from '../interfaces/answer';

@Injectable({
    providedIn: 'root'
  })
export class QuestionService {
public answers:Array<answer>=[];
surveyTech:string;
 DbOptions:any;
  constructor() { }

setSurveyTech(tech:string){
    this.surveyTech=tech;
}
getSurveyTech(){
    return this.surveyTech;
}
setDbOptions(options:any){
this.DbOptions=options;
}
getDbOptions(){
    return this.DbOptions;
}
submitAnswers(ans:answer){
    const i=this.answers.findIndex((item)=>item.qId==ans.qId)
    if(i==-1){
        this.answers.push(ans);
    }else{
        this.answers[i]=ans;
    }
    console.log('answers array',this.answers);
}
  
}
