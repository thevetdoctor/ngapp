import { Injectable } from '@angular/core';
import { data } from '../data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auction } from '../types/auction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  auctionsUrl:string = 'https://api-core-dev.caronsale.de/api/v1/public/preview/auctions'
  constructor(private http:HttpClient) { }

  getAuctions():Observable<Auction[]> {
    return this.http.get<Auction[]>(this.auctionsUrl, httpOptions)
    // return data;
  }
}
