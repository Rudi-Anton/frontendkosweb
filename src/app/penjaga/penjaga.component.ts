import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-penjaga',
  templateUrl: './penjaga.component.html',
  styleUrls: ['./penjaga.component.css']
})
export class PenjagaComponent implements OnInit {

  dataPenjaga: Object;
  idPenjaga: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga')
      .subscribe((res: Response) => {
        this.dataPenjaga = res.json();
      })
  }
  PenjagaDelete(idPenjaga) {
    this.http.delete('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + idPenjaga)
      .subscribe((res: Response) => {
        window.location.href = "./penjaga";
      })
  }

}
