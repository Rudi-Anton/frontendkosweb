import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './koscreatemodel';


@Component({
  selector: 'app-koscreate',
  templateUrl: './koscreate.component.html',
  styleUrls: ['./koscreate.component.css']
})
export class KoscreateComponent implements OnInit {

  dataKosCreate: Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataKosCreate = new Data();
    
  }
  KosCreate(dataKosCreate) {

    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //debugger;
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/kos/' + '?' + document.cookie, JSON.stringify(this.dataKosCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./kos";
        debugger;
      })
  }
}
