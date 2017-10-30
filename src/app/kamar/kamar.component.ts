import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kamar',
  templateUrl: './kamar.component.html',
  styleUrls: ['./kamar.component.css']
})
export class KamarComponent implements OnInit {

  dataKamar: Object;
  idKamar: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar' + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataKamar = res.json();
      })
  }
  KamarDelete(idKamar) {
    this.http.delete('https://kosannarutosasuke.herokuapp.com/api/kamar/' + idKamar + "?" + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./kamar";
      })
  }

}
