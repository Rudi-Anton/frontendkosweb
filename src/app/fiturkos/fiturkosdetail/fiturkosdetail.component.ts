import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-fiturkosdetail',
  templateUrl: './fiturkosdetail.component.html',
  styleUrls: ['./fiturkosdetail.component.css']
})
export class FiturkosdetailComponent implements OnInit {

  dataFiturkosDetail: Object;
  idFiturkos: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idFiturkos = params['id'];
      debugger;
     })
   }
    
  ngOnInit() {
    this.idFiturkos;
   
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/fiturkos/' + this.idFiturkos + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataFiturkosDetail = res.json();
          
        })
    }
}
