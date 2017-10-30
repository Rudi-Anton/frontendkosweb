import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-penghunidetail',
  templateUrl: './penghunidetail.component.html',
  styleUrls: ['./penghunidetail.component.css']
})
export class PenghunidetailComponent implements OnInit {

  dataPenghuniDetail: Object;
  idPenghuni: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idPenghuni = params['id'];
      debugger;
     })
   }
    
  ngOnInit() {
    this.idPenghuni;
   
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + this.idPenghuni + "?" + document.cookie)
        .subscribe((res: Response) => {
          this.dataPenghuniDetail = res.json();
          
        })
    }
}

