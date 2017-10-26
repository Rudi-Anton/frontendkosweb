import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-penjagadetail',
  templateUrl: './penjagadetail.component.html',
  styleUrls: ['./penjagadetail.component.css']
})
export class PenjagadetailComponent implements OnInit {

  dataPenjagaDetail: Object;
  idPenjaga: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idPenjaga = params['id'];
      debugger;
     })
   }
    
  ngOnInit() {
    this.idPenjaga;
   
      this.http.get('https://kosannarutosasuke.herokuapp.com/api/penjaga/' + this.idPenjaga)
        .subscribe((res: Response) => {
          this.dataPenjagaDetail = res.json();
          
        })
    }
}

