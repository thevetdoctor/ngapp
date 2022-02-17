import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuctionsComponent } from '../auctions/auctions.component';
import { Login } from '../login/login.component';

const routes: Routes = [
  { path: 'auctions', component: AuctionsComponent },
  { path: 'login', component: Login }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
