import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-kamaredit',
  templateUrl: './kamaredit.component.html',
  styleUrls: ['./kamaredit.component.css']
})
export class KamareditComponent implements OnInit {

  dataKamarEdit: Object;
  idKamar: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKamar = params['id'];
    })
  }

  ngOnInit() {
    this.idKamar;
    this.dataKamarEdit;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + this.idKamar + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataKamarEdit = res.json();
      })
  }

  EditKamar(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/kamar/' + id + "?" + document.cookie, this.dataKamarEdit)
      .subscribe((res: Response) => {
        window.location.href = "./kamar";
      })
  }


}


