import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './fiturkoscreatemodel';



@Component({
  selector: 'app-fiturkos',
  templateUrl: './fiturkos.component.html',
  styleUrls: ['./fiturkos.component.css']
})
export class FiturkosComponent implements OnInit {

  dataFiturkos: Object;
  dataFiturkosDetail: Object;
  dataFiturkosEdit: Object;
  dataKos: Object;
  idFiturkos: String;
  dataFiturkosCreate: Data;

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos' + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataFiturkos = res.json();
      })
  }
  FiturkosDelete(idFiturkos) {
    if (confirm("Apakah yakin ingin menghapus ini?") == true) {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + idFiturkos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          let KdKos = res.json().KdKos;
          let y = res.json().Air;
          y = y + res.json().Listrik;
          y = y + res.json().Internet;
          if (res.json().KamarMandi == "Dalam") {
            y = y + 100000;
          } else {
            y = y;
          }
          if (res.json().TV == true) {
            y = y + 100000;
          } else {
            y = y;
          }
          if (res.json().Kulkas == true) {
            y = y + 100000;
          } else {
            y = y;
          }
          //ambil data yang akan diupdate
          this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + KdKos + "?" + localStorage.token)
            .subscribe((res: Response) => {
              debugger;
              this.dataKos = res.json();
              this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan + y;
              let idKos = this.dataKos[0]._id;
              debugger;
              //update pendapatan pada tabel kos
              this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token, this.dataKos[0])
                .subscribe((res: Response) => {
                  //delet data
                  this.http.delete('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + idFiturkos + "?" + localStorage.token)
                    .subscribe((res: Response) => {
                      window.location.href = "./fiturkos";
                    })
                })
            })
        })

    }
  }

  FiturkosData() {
    this.dataFiturkosCreate = new Data();
  }

  FiturKosDetail(id) {

    this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + id + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataFiturkosDetail = res.json();

      })
  }

  FiturkosCreate(dataFiturkosCreate) {
    if (dataFiturkosCreate.KdKos == null || dataFiturkosCreate.Air == null || dataFiturkosCreate.Listrik == null
      || dataFiturkosCreate.Internet == null || dataFiturkosCreate.KamarMandi == null || dataFiturkosCreate.Kulkas == null || dataFiturkosCreate.TV == null) {
      alert("Data Masih ada yang kosong");
    }
    else {
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos/kode/' + dataFiturkosCreate.KdKos + "?" + localStorage.token)
        .subscribe((res: Response) => {
          this.dataFiturkos = res.json();
          debugger;
          if (this.dataFiturkos == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });

            this.http.post('https://kosannarutosasuke.herokuapp.com/api/fiturkos' + '?' + localStorage.token, JSON.stringify(this.dataFiturkosCreate), opsi)
              .subscribe((res: Response) => {
                let KdKos = res.json().KdKos;
                let a = res.json().Air;
                a = a + res.json().Listrik;
                a = a + res.json().Internet;
                if (res.json().KamarMandi == "Dalam") {
                  a = a + 100000;
                } else {
                  a = a;
                }
                if (res.json().TV == true) {
                  a = a + 100000;
                } else {
                  a = a;
                }
                if (res.json().Kulkas == true) {
                  a = a + 100000;
                } else {
                  a = a;
                }
                //window.location.href = "./fiturkos";
                debugger;
                this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/kode/' + KdKos + "?" + localStorage.token)
                  .subscribe((res: Response) => {
                    debugger;
                    this.dataKos = res.json();
                    this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan - a;
                    let idKos = this.dataKos[0]._id;
                    debugger;
                    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos + "?" + localStorage.token, this.dataKos[0])
                      .subscribe((res: Response) => {
                        debugger;
                        window.location.href = "./fiturkos";
                      })
                  })
              })
          }
          else {
            alert("Kode Kos Sudah Ada");
          }
        })
    }
  }

  EditData(idPenjaga) {
    debugger;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + idPenjaga + "?" + localStorage.token)
      .subscribe((res: Response) => {
        this.dataFiturkosEdit = res.json();
      })
  }

  FiturkosUbah(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + id + "?" + localStorage.token, this.dataFiturkosEdit)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
      })
  }

}

