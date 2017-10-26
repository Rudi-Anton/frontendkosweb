import { Component, OnInit } from '@angular/core';
import { Http, Response, Request ,Headers, RequestOptions} from '@angular/http';

export class Data {
    public _id : string;
    public KdKos : string;
    public Internet:Number;
    public KamarMandi:String;
    public TV:Boolean;
    public Kulkas:Boolean;
    public Air:Number;
    public Listrik:Number;
}