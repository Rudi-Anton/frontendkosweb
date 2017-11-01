import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './loginmodel';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dataLogin: Data;
  constructor(private http: Http) {

  }

  ngOnInit() {
      this.dataLogin = new Data();
  }

  // Logiin() {
  //   debugger;
  //   if (localStorage.token == null || localStorage.token == "") {
  //     this.dataLogin = new Data();
  //   } else {
  //     alert("Anda Sudah Login");
  //     window.location.href = '/';
  //   }
  // }

  Login(dataLogin) {
    debugger;
    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    //let dataLogin = JSON.stringify({NamaPengguna:namapengguna, KunciPengguna:kuncipengguna});
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/login/authenticate', JSON.stringify(dataLogin), opsi)
      .subscribe((res: Response) => {
        //document.cookie = "token=" + res.json().token;
        localStorage.setItem('token', "token=" + res.json().token);
        window.location.href = '/';
        debugger;
      });
  }
  Logout() {
    localStorage.removeItem('token');
    debugger;
    alert("Logout Sukses")
    window.location.href = '/';
  }
}
