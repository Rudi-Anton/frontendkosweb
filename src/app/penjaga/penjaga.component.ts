import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './penjagamodel';

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
    this.http.get('http://localhost:8889/api/penjaga?' + localStorage.token)
      .subscribe((res: Response) => {
        this.dataPenjaga = res.json();
        //debugger;
      })
  }

  PenjagaData() {
    this.dataPenjagaCreate = new Data();
  }

  PenjagaCreate(dataPenjagaCreate) {
    if (dataPenjagaCreate.KdPenjaga == null || dataPenjagaCreate.KdKos == null || dataPenjagaCreate.NamaPenjaga == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('http://localhost:8889/api/penjaga/kode/' + dataPenjagaCreate.KdPenjaga + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataPenjaga = res.json();
          debugger;
          if (this.dataPenjaga == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });
            //debugger;
            this.http.post('http://localhost:8889/api/penjaga/' + '?' + document.cookie, JSON.stringify(this.dataPenjagaCreate), opsi)
              .subscribe((res: Response) => {
                window.location.href = "./penjaga";
                debugger;
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
    this.http.get('http://localhost:8889/api/penjaga/kos/' + kdpenjaga + '/' + kdkos + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataPenjagaDetail = res.json();
        debugger;
      })
  }


  PenjagaDelete(idPenjaga) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.delete('http://localhost:8889/api/penjaga/' + idPenjaga + "?" + document.cookie)
        .subscribe((res: Response) => {
          window.location.href = "./penjaga";
        })
    }
  }

  PenjagaEdit(idPenjaga) {
    debugger;
    this.http.get('http://localhost:8889/api/penjaga/' + idPenjaga + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataPenjagaEdit = res.json();
      })
  }

  PenjagaUbah(id, dataPenjagaEdit) {
    debugger;
    if (dataPenjagaEdit.KdPenjaga == "" || dataPenjagaEdit.KdKos == "" || dataPenjagaEdit.NamaPenjaga == "") {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.put('http://localhost:8889/api/penjaga/' + id + "?" + document.cookie, dataPenjagaEdit)
        .subscribe((res: Response) => {
          window.location.href = "./penjaga";
        })
    }
  }
}
