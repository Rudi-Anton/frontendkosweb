import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './penghunimodel';

@Component({
  selector: 'app-penghuni',
  templateUrl: './penghuni.component.html',
  styleUrls: ['./penghuni.component.css']
})
export class PenghuniComponent implements OnInit {

  dataPenghuniCreate: Data;
  dataPenghuni: Object;
  dataPenghuniDetail: Object;
  dataPenghuniEdit: Object;
  idPenghuni: String;
  today: Date;
  todayy: String;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
   this.today = new Date();
    var dd = this.today.getDate();
    var mm = this.today.getMonth() + 1; //January is 0!
    var yyyy = this.today.getFullYear();
    if(dd<10){
      var stringdd='0'+dd
    } 
    if(mm<10){
      var stringmm='0'+mm
    } 
    if(dd>=10){
      var stringdd= ''+dd
    } 
    if(mm>=10){
      var stringmm= ''+mm
    } 
    this.todayy = yyyy + '-' +stringmm + '-' + stringdd;
    
    console.log(this.todayy);
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni' + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenghuni = res.json();
      })

    
  }

  PenghuniData() {
    this.dataPenghuniCreate = new Data();
  }

  PenghuniCreate(dataPenghuniCreate) {
    if (dataPenghuniCreate.KdPenghuni == null || dataPenghuniCreate.KdPenghuni == null || dataPenghuniCreate.NamaPenghuni == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      let header = new Headers({ 'Content-Type': 'application/json' });
      let opsi = new RequestOptions({ headers: header });
      //debugger;
      this.http.post('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + '?' + localStorage.token, JSON.stringify(this.dataPenghuniCreate), opsi)
        .subscribe((res: Response) => {
          window.location.href = "./penghuni";
          debugger;
        })
    }
  }

  PenghuniDetail(idPenghuni) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + idPenghuni + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenghuniDetail = res.json();

      })
  }


  PenghuniDelete(idPenghuni) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.delete('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + idPenghuni + "?" + localStorage.token)
        .subscribe((res: Response) => {
          window.location.href = "./penghuni";
        })
    }
  }

  PenghuniEdit(idPenghuni) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + idPenghuni + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenghuniEdit = res.json();
      })
  }

  PenghuniUbah(id, dataPenghuniEdit) {
    if (dataPenghuniEdit.KdPenghuni == "" || dataPenghuniEdit.KdPenghuni == "" || dataPenghuniEdit.NamaPenghuni == "") {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.put('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + id + "?" + localStorage.token, dataPenghuniEdit)
        .subscribe((res: Response) => {
          window.location.href = "./penghuni";
        })
    }
  }
}
