import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './kamarmodel';
import * as $ from 'jquery';
import 'datatables.net';


@Component({
  selector: 'app-kamar',
  templateUrl: './kamar.component.html',
  styleUrls: ['./kamar.component.css']
})
export class KamarComponent implements OnInit {

  dataKamar: Object;
  dataKamarDetail: Object;
  dataKamarEdit: any;
  dataKos: Object;
  idKamar: String;
  dataKamarCreate: Data;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar' + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKamar = res.json();
        $(document).ready(function () {
          $('#kamar').DataTable();

        });
        this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/' + "?" + localStorage.token)
          .subscribe((res: Response) => {
            this.dataKos = res.json();
          })
      }


      );

  }
  KamarDelete(idKamar) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
        .subscribe((res: Response) => {
          let KdKos = res.json().KdKos;
          let y = res.json().Tagihan;

          //ambil data yang akan diupdate
          this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + KdKos + "?" + localStorage.token)
            .subscribe((res: Response) => {
              debugger;
              this.dataKos = res.json();
              this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan - y;
              let idKos = this.dataKos[0]._id;
              debugger;
              //update pendapatan pada tabel kos
              this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token, this.dataKos[0])
                .subscribe((res: Response) => {
                  //delet data
                  this.http.delete('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
                    .subscribe((res: Response) => {
                      window.location.href = "./kamar";
                    })
                })
            })
        })

    }
  }

  KamarData() {
    this.dataKamarCreate = new Data();
  }

  KamarDetail(id) {

    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + id + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataKamarDetail = res.json();

      })
  }

  KamarCreate(dataKamarCreate) {



    if (dataKamarCreate.KdKos == null || dataKamarCreate.KdKamarKos == null || dataKamarCreate.Tagihan == null
      || dataKamarCreate.CuciPakaian == null || dataKamarCreate.AC == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + dataKamarCreate.KdKos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataKamar = res.json();
          debugger;
          if (this.dataKamar != "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });

            this.http.post('https://kosannarutosasuke.herokuapp.com/api/kamar' + '?' + localStorage.token, JSON.stringify(this.dataKamarCreate), opsi)
              .subscribe((res: Response) => {
                let KdKos = res.json().KdKos;
                let a = res.json().Tagihan;
                //window.location.href = "./kamar";
                debugger;
                this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + KdKos + "?" + localStorage.token)
                  .subscribe((res: Response) => {
                    debugger;
                    this.dataKos = res.json();
                    this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan + a;
                    let idKos = this.dataKos[0]._id;
                    debugger;
                    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token, this.dataKos[0])
                      .subscribe((res: Response) => {
                        debugger;
                        window.location.href = "./kamar";
                      })
                  })
              })
          }
          else {
            alert("Kode Kos Tersebut Tidak Ada Pada Daftar Kos");
          }
        })
    }
  }
  KamarEdit(idKamar) {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + localStorage.token)
      .subscribe((res: Response) =>
        this.dataKamarEdit = res.json())
  }

  KamarUbah(id, dataKamarEdit) {
    if (dataKamarEdit.KdKos == "" || dataKamarEdit.KdKamarKos == "" || dataKamarEdit.Tagihan == ""
      || dataKamarEdit.CuciPakaian == "" || dataKamarEdit.AC == "") {
      alert("Data Masih ada yang kosong");
    }
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + id + "?" + localStorage.token)
      .subscribe((res: Response) => {
        console.log(this.dataKamarEdit.Tagihan);
        console.log(res.json().Tagihan);
        debugger;
        let KdKos = res.json().KdKos;
        let a = res.json().Tagihan - this.dataKamarEdit.Tagihan;

        //ambil data yang akan diupdate
        this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + KdKos + "?" + localStorage.token)
          .subscribe((res: Response) => {
            debugger;
            this.dataKos = res.json();
            this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan - (a);
            let idKos = this.dataKos[0]._id;
            debugger;
            console.log(this.dataKos[0].Pendapatan);
            //update pendapatan pada tabel kos
            this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token, this.dataKos[0])
              .subscribe((res: Response) => {
                //edit data
                this.http.put('https://kosannarutosasuke.herokuapp.com/api/kamar/' + id + "?" + localStorage.token, this.dataKamarEdit)
                  .subscribe((res: Response) => {
                    window.location.href = "./kamar";

                  })
              })
          })
      })

  }
}

