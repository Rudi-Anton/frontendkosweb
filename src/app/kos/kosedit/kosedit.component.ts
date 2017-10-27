import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-kosedit',
  templateUrl: './kosedit.component.html',
  styleUrls: ['./kosedit.component.css']
})
export class KoseditComponent implements OnInit {

  dataKosEdit: Object;
  idKos: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKos = params['id'];
    })
  }

  ngOnInit() {
    this.idKos;
    this.dataKosEdit;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/' + this.idKos + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataKosEdit = res.json();
      })
  }

  EditKos(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kos/' + id + "?" + document.cookie, this.dataKosEdit)
      .subscribe((res: Response) => {
        window.location.href = "./kos";
      })
  }


}


