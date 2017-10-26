import { Component, OnInit } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Routes } from '@angular/router';
import { Data } from './loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataLogin: Data;
    constructor(private http: Http) {

     }

    ngOnInit() {
        this.dataLogin = new Data();
    }

    Login(dataLogin) {
        debugger;
        let header = new Headers({ 'Content-Type': 'application/json' });
        let opsi = new RequestOptions({ headers: header });
        //let dataLogin = JSON.stringify({NamaPengguna:namapengguna, KunciPengguna:kuncipengguna});
        this.http.post('https://kosannarutosasuke.herokuapp.com/api/login/authenticate', JSON.stringify(dataLogin), opsi)
        .subscribe((res:Response) => {
            debugger;
                document.cookie="token="+res.json().token;
                window.location.href='/';
            });
    }
}
