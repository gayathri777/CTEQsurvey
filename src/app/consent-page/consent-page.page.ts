import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-consent-page',
  templateUrl: './consent-page.page.html',
  styleUrls: ['./consent-page.page.scss'],
})
export class ConsentPagePage implements OnInit {
  private desc: string = '';
  constructor(public http: HttpClient) {
    let self = this;
    this.http.get('https://cteq-survey.herokuapp.com/api/getConsentDetails/1').subscribe(data => {
      self.desc = data['description'] || 'I am Going to answer questions about technology I use. I know my answers will be seen and used by UCLAN but, my name was not stored.';
    });
  }

  ngOnInit() {
  }

}
