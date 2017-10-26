import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-gajipenjaga',
  templateUrl: './gajipenjaga.component.html',
  styleUrls: ['./gajipenjaga.component.css']
})
export class GajipenjagaComponent implements OnInit {

  dataGaji: Object;
  idGaji: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/gajipenjaga')
      .subscribe((res: Response) => {
        this.dataGaji = res.json();
      })
  }

}
