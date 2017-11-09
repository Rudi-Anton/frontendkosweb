import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PenjagaComponent } from './penjaga/penjaga.component';
import { GajipenjagaComponent } from './gajipenjaga/gajipenjaga.component';
import { FiturkosComponent } from './fiturkos/fiturkos.component';
import { LoginComponent } from './login/login.component';
import { KosComponent } from './kos/kos.component';
import { PenghuniComponent } from './penghuni/penghuni.component';
import { KamarComponent } from './kamar/kamar.component';
import { HomeComponent } from './home/home.component';

let routes : Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"penjaga",component:PenjagaComponent},
  {path:"gajipenjaga",component:GajipenjagaComponent},
  {path:"fiturkos",component:FiturkosComponent},
  {path:"kos",component:KosComponent},
  {path:"kamar",component:KamarComponent},
  {path:"penghuni",component:PenghuniComponent},
  
 ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    PenjagaComponent,
    GajipenjagaComponent,
    FiturkosComponent,
    LoginComponent,
    KosComponent,
    PenghuniComponent,
    KamarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
