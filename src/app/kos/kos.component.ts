import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-kos',
  templateUrl: './kos.component.html',
  styleUrls: ['./kos.component.css']
})
export class KosComponent implements OnInit {

  dataKos: Object;
  idKos: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos')
      .subscribe((res: Response) => {
        this.dataKos = res.json();
      })
  }
  KosDelete(idKos) {
    this.http.delete('https://kosannarutosasuke.herokuapp.com/api/kos/' + idKos)
      .subscribe((res: Response) => {
        window.location.href = "./kos";
      })
  }

}
