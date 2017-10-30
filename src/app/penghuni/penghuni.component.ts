import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-penghuni',
  templateUrl: './penghuni.component.html',
  styleUrls: ['./penghuni.component.css']
})
export class PenghuniComponent implements OnInit {

  dataPenghuni: Object;
  idPenghuni: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni' + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataPenghuni = res.json();
      })
  }
  PenghuniDelete(idPenghuni) {
    this.http.delete('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + idPenghuni + "?" + document.cookie)
      .subscribe((res: Response) => {
        window.location.href = "./penghuni";
      })
  }

}
