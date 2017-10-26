import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-gajipenjagaedit',
  templateUrl: './gajipenjagaedit.component.html',
  styleUrls: ['./gajipenjagaedit.component.css']
})
export class GajipenjagaeditComponent implements OnInit {

  dataGajiEdit: Object;
  idGaji: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idGaji = params['id'];
    })
  }

  ngOnInit() {
    this.idGaji;
    this.dataGajiEdit;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/gajipenjaga/' + this.idGaji + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataGajiEdit = res.json();
      })
  }

  EditGaji(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/gajipenjaga/' + id + "?" + document.cookie, this.dataGajiEdit)
      .subscribe((res: Response) => {
        window.location.href = "./gajipenjaga";
      })
  }


}



