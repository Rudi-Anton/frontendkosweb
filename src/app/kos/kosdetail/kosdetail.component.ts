import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-kosdetail',
  templateUrl: './kosdetail.component.html',
  styleUrls: ['./kosdetail.component.css']
})
export class KosdetailComponent implements OnInit {

  dataKosDetail: Object;
  idKos: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKos = params['id'];
      debugger;
     })
   }
    
  ngOnInit() {
    this.idKos;
   
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kos/' + this.idKos + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataKosDetail = res.json();
          
        })
    }
}

