import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './penjagamodel';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-penjaga',
  templateUrl: './penjaga.component.html',
  styleUrls: ['./penjaga.component.css']
})
export class PenjagaComponent implements OnInit {

  dataPenjagaCreate: Data;
  dataPenjaga: Object;
  dataPenjagaDetail: Object;
  dataPenjagaEdit: Object;
  idPenjaga: String;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga?' + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenjaga = res.json();
        $(document).ready(function () {
          $('#penjaga').DataTable();
        });
        //debugger;
      })
  }

  PenjagaData() {
    this.dataPenjagaCreate = new Data();
  }

  PenjagaCreate(dataPenjagaCreate) {
    if (dataPenjagaCreate.KdPenjaga == null || dataPenjagaCreate.KdKos == null || dataPenjagaCreate.NamaPenjaga == null
      || dataPenjagaCreate.JenisKelamin == null || dataPenjagaCreate.Alamat == null || dataPenjagaCreate.NoHp == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/kode/' + dataPenjagaCreate.KdPenjaga + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataPenjaga = res.json();
          debugger;
          if (this.dataPenjaga == "") {
            this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + dataPenjagaCreate.KdKos + "?" + localStorage.token)
              .subscribe((res: Response) => {
                this.dataPenjaga = res.json();
                debugger;
                if (this.dataPenjaga != "") {
                  let header = new Headers({ 'Content-Type': 'application/json' });
                  let opsi = new RequestOptions({ headers: header });
                  debugger;
                  this.http.post('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + '?' + localStorage.token, JSON.stringify(this.dataPenjagaCreate), opsi)
                    .subscribe((res: Response) => {
                      window.location.href = "./penjaga";
                      debugger;
                    })
                }
                else {
                  alert("Kode Kos Tidak tersedia");
                }
              })
          }
          else {
            alert("Kode Penjaga Sudah Ada");
          }
        })
    }
  }

  PenjagaDetail(kdpenjaga, kdkos) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/kos/' + kdpenjaga + '/' + kdkos + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenjagaDetail = res.json();
        debugger;
      })
  }


  PenjagaDelete(idPenjaga) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.delete('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + idPenjaga + "?" + localStorage.token)
        .subscribe((res: Response) => {
          window.location.href = "./penjaga";
        })
    }
  }

  PenjagaEdit(idPenjaga) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + idPenjaga + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenjagaEdit = res.json();
        debugger;
      })
  }

  PenjagaUbah(dataPenjagaEdit) {
    debugger;
    if (dataPenjagaEdit.KdPenjaga == "" || dataPenjagaEdit.KdKos == "" || dataPenjagaEdit.NamaPenjaga == ""
      || dataPenjagaEdit.JenisKelamin == "" || dataPenjagaEdit.Alamat == "" || dataPenjagaEdit.NoHp == "") {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/kode/' + dataPenjagaEdit.KdPenjaga + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataPenjaga = res.json();
          debugger;
          if (this.dataPenjaga == "") {
            this.http.put('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + dataPenjagaEdit._id + "?" + localStorage.token, dataPenjagaEdit)
              .subscribe((res: Response) => {
                window.location.href = "./penjaga";
              })
          }
          else {
            alert("Kode Penjaga Sudah Ada");
          }
        })
    }

  }
}
