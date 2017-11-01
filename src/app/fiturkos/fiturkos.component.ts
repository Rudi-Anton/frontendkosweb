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
    this.http.get('http://localhost:8889/api/fiturkos' + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataFiturkos = res.json();
      })
  }
  FiturkosDelete(idFiturkos) {
    this.http.delete('http://localhost:8889/api/fiturkos/' + idFiturkos + "?" + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
      })
  }

  FiturkosData() {
    this.dataFiturkosCreate = new Data();
  }

  FiturKosDetail(id) {

    this.http.get('http://localhost:8889/api/fiturkos/' + id + "?" + document.cookie)
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
      let dataTambah = dataFiturkosCreate.Air;
      this.http.get('http://localhost:8889/api/fiturkos/kode/' + dataFiturkosCreate.KdKos + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataFiturkos = res.json();
          debugger;
          if (this.dataFiturkos == "") {
            let header = new Headers({ 'Content-Type': 'application/json' });
            let opsi = new RequestOptions({ headers: header });

            this.http.post('http://localhost:8889/api/fiturkos' + '?' + document.cookie, JSON.stringify(this.dataFiturkosCreate), opsi)
              .subscribe((res: Response) => {
                let KdKos = res.json().KdKos;
                //window.location.href = "./fiturkos";
                debugger;
                this.http.get('http://localhost:8889/api/kos/kode/' + KdKos + "?" + document.cookie)
                  .subscribe((res: Response) => {
                    debugger;
                    this.dataKos = res.json();
                    this.dataKos[0].Pendapatan = this.dataKos[0].Pendapatan + this.dataFiturkos[0].Air;
                    debugger;
                    this.http.put('http://localhost:8889/api/kos/kode/' + KdKos + "?" + document.cookie, this.dataKos)
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
    this.http.get('http://localhost:8889/api/fiturkos/' + idPenjaga + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataFiturkosEdit = res.json();
      })
  }

  FiturkosUbah(id) {
    this.http.put('http://localhost:8889/api/fiturkos/' + id + "?" + document.cookie, this.dataFiturkosEdit)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
      })
    // }
  }

}

