import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kosmodel';

@Component({
  selector: 'app-kos',
  templateUrl: './kos.component.html',
  styleUrls: ['./kos.component.css']
})
export class KosComponent implements OnInit {

  dataKosCreate: Data;
  dataKos: Object;
  dataKosDetail: Object;
  dataKosEdit: Object;
  idKos: String;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {

    
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos' + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKos = res.json();
      })
  }

  KosData() {
    this.dataKosCreate = new Data();
  }

  KosCreate(dataKosCreate) {
    if (dataKosCreate.KdKos==null || dataKosCreate.KdKos==null || dataKosCreate.NamaKos==null) { 
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + dataKosCreate.KdKos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataKos = res.json();
          //debugger;
          if (this.dataKos == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            //debugger;
            this.http.post('https://kosannarutosasuke.herokuapp.com/api/kos/' + '?' + localStorage.token, JSON.stringify(this.dataKosCreate), opsi)
              .subscribe((res: Response) => {
                window.location.href = "./kos";
                debugger;
              })
          }
          else {
            alert("Kos Dengan Kode Kos Tersebut Sudah Ada");
          }
        })
    }
  }

  KosDetail(idKos) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKosDetail = res.json();

      })
  }


  KosDelete(idKos) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.delete('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          window.location.href = "./kos";
        })
    }
  }

  KosEdit(idKos) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKosEdit = res.json();
      })
  }

  KosUbah(id,dataKosEdit) {
    if (dataKosEdit.KdKos=="" || dataKosEdit.KdKos=="" || dataKosEdit.NamaKos=="") { 
      alert("Data Masih ada yang kosong");
    }
    else {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + id + "?" + localStorage.token, dataKosEdit)
      .subscribe((res: Response) => {
        window.location.href = "./kos";
      })
    }
  }
}
