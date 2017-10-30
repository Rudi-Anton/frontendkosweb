import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-kamardetail',
  templateUrl: './kamardetail.component.html',
  styleUrls: ['./kamardetail.component.css']
})
export class KamardetailComponent implements OnInit {

  dataKamarDetail: Object;
  idKamar: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idKamar = params['id'];
      debugger;
     })
   }
    
  ngOnInit() {
    this.idKamar;
   
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/kamar/' + this.idKamar + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataKamarDetail = res.json();
          
        })
    }
}

