import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-penjagaedit',
  templateUrl: './penjagaedit.component.html',
  styleUrls: ['./penjagaedit.component.css']
})
export class PenjagaeditComponent implements OnInit {

  dataPenjagaEdit: Object;
  idPenjaga: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idPenjaga = params['id'];
    })
  }

  ngOnInit() {
    this.idPenjaga;
    this.dataPenjagaEdit;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + this.idPenjaga + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataPenjagaEdit = res.json();
      })
  }

  EditPenjaga(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + id + "?" + document.cookie, this.dataPenjagaEdit)
      .subscribe((res: Response) => {
        window.location.href = "./penjaga";
      })
  }


}


