import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-fiturkosedit',
  templateUrl: './fiturkosedit.component.html',
  styleUrls: ['./fiturkosedit.component.css']
})
export class FiturkoseditComponent implements OnInit {

  dataFiturkosEdit: Object;
  idFiturkos: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idFiturkos = params['id'];
    })
  }

  ngOnInit() {
    this.idFiturkos;
    this.dataFiturkosEdit;
    this.http.get('http://localhost:8889/api/fiturkos/' + this.idFiturkos + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataFiturkosEdit = res.json();
      })
  }

  EditFiturkos(id) {
    this.http.put('http://localhost:8889/api/fiturkos/' + id + "?" + document.cookie, this.dataFiturkosEdit)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
      })
  }


}