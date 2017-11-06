import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKamarKos: string;
    public KdKos: string;
    public AC: boolean;
    public Tagihan: number;
    public CuciPakaian: number;
    public BuktiTagihan: string
}