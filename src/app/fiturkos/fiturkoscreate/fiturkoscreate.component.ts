import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './fiturkoscreatemodel';


@Component({
  selector: 'app-fiturkoscreate',
  templateUrl: './fiturkoscreate.component.html',
  styleUrls: ['./fiturkoscreate.component.css']
})
export class FiturkoscreateComponent implements OnInit {

  dataFiturkosCreate: Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataFiturkosCreate = new Data();
  }
  FiturkosCreate(dataFiturkosCreate) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //let data = JSON.stringify({kdFiturkos : kode, NamaFiturkos : nama});
    debugger;
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + '?' + document.cookie, JSON.stringify(this.dataFiturkosCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
        debugger;
      })
  }
}

