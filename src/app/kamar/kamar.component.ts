import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kamarmodel';

@Component({
  selector: 'app-kamar',
  templateUrl: './kamar.component.html',
  styleUrls: ['./kamar.component.css']
})
export class KamarComponent implements OnInit {

  dataKamarCreate: Data;
  dataKamar: Object;
  dataKamarDetail: Object;
  dataKamarEdit: Object;
  dataKos: Object;
  idKamar: String;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar' + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKamar = res.json();
      })
  }

  KamarData() {
    this.dataKamarCreate = new Data();
  }

  KamarCreate(dataKamarCreate) {
    if (dataKamarCreate.KdKos == null ||  dataKamarCreate.KdKamarKos == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/kode/' + dataKamarCreate.KdKos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataKamar = res.json();
          if (this.dataKamar == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });

            this.http.post('https://kosannarutosasuke.herokuapp.com/api/kamar' + '?' + localStorage.token, JSON.stringify(this.dataKamarCreate), opsi)
              .subscribe((res: Response) => {
                let KdKos = res.json().KdKos;
                let a = res.json().Tagihan;

                this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode' + KdKos + "?" + localStorage.token)
                  .subscribe((res: Response) => {
                    this.dataKos = res.json();
                    this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan + a;
                    let idKos = this.dataKos[0]._id;
                    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos' + idKos + "?" + localStorage.token, this.dataKos[0])
                      .subscribe((res: Response) => {
                        window.location.href = "./kamar";
                      })
                  })
              })
          }
        })
    }
  }


  KamarDetail(idKamar) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKamarDetail = res.json();

      })
  }


  KamarDelete(idKamar) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.delete('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
        .subscribe((res: Response) => {
          window.location.href = "./kamar";
        })
    }
  }

  KamarEdit(idKamar) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKamarEdit = res.json();
      })
  }

  KamarUbah(id, dataKamarEdit) {
    if (dataKamarEdit.KdKos == "" || dataKamarEdit.KdKos == "" || dataKamarEdit.KdKamarKos== "") {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.put('https://kosannarutosasuke.herokuapp.com/api/kamar/' + id + "?" + localStorage.token, dataKamarEdit)
        .subscribe((res: Response) => {
          window.location.href = "./kamar";
        })
    }
  }
}
