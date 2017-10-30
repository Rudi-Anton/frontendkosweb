import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKos : string;
    public KdKamarKos: string;
    public NamaPenghuni: string;
    public TGLKos: Date;
    public NoKTP: string;
    public NoHP: string;
    public NamaBank: string;
}