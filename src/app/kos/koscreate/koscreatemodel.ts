import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKos : string;
    public NamaKos: string;
    public KategoriKos: string;
    public JmlKamar:number;
    public Location:number[];
    public Latitude: number;
    public Longitude: number;
    public Pendapatan: number;
}