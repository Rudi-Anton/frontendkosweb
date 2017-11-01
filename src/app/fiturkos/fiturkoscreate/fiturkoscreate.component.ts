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
  //dataFitur: Object;
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataFiturkosCreate = new Data();
  }
  FiturkosCreate(dataFiturkosCreate) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //let data = JSON.stringify({kdFiturkos : kode, NamaFiturkos : nama});
    //debugger;
    this.http.post('http://localhost:8889/api/fiturkos' + '?' + document.cookie, JSON.stringify(this.dataFiturkosCreate), opsi)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
        // let KdKos = dataFiturkosCreate.KdKos
        // debugger;
        // this.http.get('http://localhost:8889/api/fiturkos/jumlah/' + KdKos + "?" + document.cookie)
        //   .subscribe((res: Response) => {
        //     //this.dataFitur = res.json();
        //     debugger;
        //     let dataFitur = res.json().Jumlah
        //     this.http.put('http://localhost:8889/api/kos/' + KdKos + "?" + document.cookie, dataFitur)
        //       .subscribe((res: Response) => {
        //         debugger;
        //       })
        //   })
      })
  }
}

