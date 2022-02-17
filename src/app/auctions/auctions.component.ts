import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../services/auction.service';
import { Auction } from '../types/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [];
  
  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAuctions().subscribe(auctions => {
      console.log(auctions);
      this.auctions = auctions;
    });
  }

}
