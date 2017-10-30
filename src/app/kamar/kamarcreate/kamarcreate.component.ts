import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kamarcreatemodel';


@Component({
  selector: 'app-kamarcreate',
  templateUrl: './kamarcreate.component.html',
  styleUrls: ['./kamarcreate.component.css']
})
export class KamarcreateComponent implements OnInit {

  dataKamarCreate: Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataKamarCreate = new Data();
    
  }
  KamarCreate(dataKamarCreate) {

    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //debugger;
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/kamar/' + '?' + document.cookie, JSON.stringify(this.dataKamarCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./kamar";
        debugger;
      })
  }
}
