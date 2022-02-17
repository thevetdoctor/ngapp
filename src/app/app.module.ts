import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddPost } from './posts/addPost.component';
import { Login } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-router/app-router.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPost,
    Login,
    AuctionsComponent,
    AuctionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
