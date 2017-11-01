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
    if (localStorage.token == null) {
      document.getElementById("login").setAttribute("style", "display:block");
      document.getElementById("logout").setAttribute("style", "display:none");
      document.getElementById("Gaji").setAttribute("style", "display:none");
      document.getElementById("Penjaga").setAttribute("style", "display:none");
      document.getElementById("Kos").setAttribute("style", "display:none");
      document.getElementById("Fitur").setAttribute("style", "display:none");
      document.getElementById("Penghuni").setAttribute("style", "display:none");
      document.getElementById("Kamar").setAttribute("style", "display:none");
    } else {
      document.getElementById("login").setAttribute("style", "display:none");
      document.getElementById("logout").setAttribute("style", "display:block");
      document.getElementById("Gaji").setAttribute("style", "display:block");
      document.getElementById("Penjaga").setAttribute("style", "display:block");
      document.getElementById("Kos").setAttribute("style", "display:block");
      document.getElementById("Fitur").setAttribute("style", "display:block");
      document.getElementById("Penghuni").setAttribute("style", "display:block");
      document.getElementById("Kamar").setAttribute("style", "display:block");
    }
    this.dataLogin = new Data();
  }

  Login(dataLogin) {

    debugger;
    let header = new Headers({ 'Content-Type': 'application/json' });
    let opsi = new RequestOptions({ headers: header });
    this.http.post('https://kosannarutosasuke.herokuapp.com/api/login/authenticate', JSON.stringify(dataLogin), opsi)
      .subscribe((res: Response) => {
        localStorage.setItem('token', "token=" + res.json().token);
        window.location.href = '/';
      });
  }

  Logout() {
    localStorage.removeItem('token');
    debugger;
    alert("Logout Sukses")
    window.location.href = '/';
  }
}
