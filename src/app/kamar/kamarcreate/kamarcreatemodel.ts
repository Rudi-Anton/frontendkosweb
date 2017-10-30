import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKos : string;
    public KdKamarKos: string;
    public AC: boolean;
    public CuciPakaian: number;
    public Tagihan: number;
    public BuktiTagihan: string;
}