import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-gajipenjaga',
  templateUrl: './gajipenjaga.component.html',
  styleUrls: ['./gajipenjaga.component.css']
})
export class GajipenjagaComponent implements OnInit {

  dataGaji: Object;
  dataGajipenjagaEdit:Object;
  idGaji: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8889/api/gajipenjaga' + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataGaji = res.json();
      })
  }

  EditData(idPenjaga) {
    debugger;
    this.http.get('http://localhost:8889/api/gajipenjaga/' + idPenjaga + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataGajipenjagaEdit = res.json();
      })
  }

  EditGajipenjaga(id) {
    this.http.put('http://localhost:8889/api/gajipenjaga/' + id + "?" + document.cookie, this.dataGajipenjagaEdit)
      .subscribe((res: Response) => {
        window.location.href = "./gajipenjaga";
      })
  }

}
