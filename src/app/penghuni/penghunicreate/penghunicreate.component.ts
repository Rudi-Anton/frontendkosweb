import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './penghunicreatemodel';


@Component({
  selector: 'app-penghunicreate',
  templateUrl: './penghunicreate.component.html',
  styleUrls: ['./penghunicreate.component.css']
})
export class PenghunicreateComponent implements OnInit {

  dataPenghuniCreate: Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataPenghuniCreate = new Data();
    
  }
  PenghuniCreate(dataPenghuniCreate) {

    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //debugger;
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + '?' + document.cookie, JSON.stringify(this.dataPenghuniCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./penghuni";
        debugger;
      })
  }
}
