import { Component, OnInit } from '@angular/core';
import { Http, Response, Request } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';


@Component({
  selector: 'app-penghuniedit',
  templateUrl: './penghuniedit.component.html',
  styleUrls: ['./penghuniedit.component.css']
})
export class PenghunieditComponent implements OnInit {

  dataPenghuniEdit: Object;
  idPenghuni: String;
  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idPenghuni = params['id'];
    })
  }

  ngOnInit() {
    this.idPenghuni;
    this.dataPenghuniEdit;
    this.http.get('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + this.idPenghuni + "?" + document.cookie)
      .subscribe((res: Response) => {
        this.dataPenghuniEdit = res.json();
      })
  }

  EditPenghuni(id) {
    this.http.put('https://kosannarutosasuke.herokuapp.com/api/penghuni/' + id + "?" + document.cookie, this.dataPenghuniEdit)
      .subscribe((res: Response) => {
        window.location.href = "./penghuni";
      })
  }


}


