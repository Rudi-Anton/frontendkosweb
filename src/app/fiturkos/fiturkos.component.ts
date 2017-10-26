import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-fiturkos',
  templateUrl: './fiturkos.component.html',
  styleUrls: ['./fiturkos.component.css']
})
export class FiturkosComponent implements OnInit {

  dataFiturkos: Object;
  idFiturkos: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos')
      .subscribe((res: Response) => {
        this.dataFiturkos = res.json();
      })
  }
  FiturkosDelete(idFiturkos) {
    this.http.delete('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + idFiturkos)
      .subscribe((res: Response) => {
        window.location.href = "./fiturkos";
      })
  }

}

