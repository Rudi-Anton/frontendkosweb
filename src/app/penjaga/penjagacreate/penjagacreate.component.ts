import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './penjagacreatemodel';


@Component({
  selector: 'app-penjagacreate',
  templateUrl: './penjagacreate.component.html',
  styleUrls: ['./penjagacreate.component.css']
})
export class PenjagacreateComponent implements OnInit {

  dataPenjagaCreate: Data;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataPenjagaCreate = new Data();
  }
  PenjagaCreate(dataPenjagaCreate) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //let data = JSON.stringify({kdPenjaga : kode, NamaPenjaga : nama});
    debugger;
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + '?' + document.cookie, JSON.stringify(this.dataPenjagaCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./penjaga";
        debugger;
      })
  }
}
