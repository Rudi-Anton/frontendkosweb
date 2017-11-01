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
import { KoscreateComponent } from './kos/koscreate/koscreate.component';
import { KosdetailComponent } from './kos/kosdetail/kosdetail.component';
import { KoseditComponent } from './kos/kosedit/kosedit.component';
import { PenghuniComponent } from './penghuni/penghuni.component';
import { KamarComponent } from './kamar/kamar.component';
import { KamarcreateComponent } from './kamar/kamarcreate/kamarcreate.component';
import { KamareditComponent } from './kamar/kamaredit/kamaredit.component';
import { KamardetailComponent } from './kamar/kamardetail/kamardetail.component';
import { PenghunicreateComponent } from './penghuni/penghunicreate/penghunicreate.component';
import { PenghunieditComponent } from './penghuni/penghuniedit/penghuniedit.component';
import { PenghunidetailComponent } from './penghuni/penghunidetail/penghunidetail.component';
import { HomeComponent } from './home/home.component';

let routes : Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"penjaga",component:PenjagaComponent},
  {path:"gajipenjaga",component:GajipenjagaComponent},
  {path:"fiturkos",component:FiturkosComponent},
  {path:"kos",component:KosComponent},
  {path:"koscreate",component:KoscreateComponent},
  {path:"kosdetail/:id",component:KosdetailComponent},
  {path:"kosedit/:id",component:KoseditComponent},
  {path:"kamar",component:KamarComponent},
  {path:"kamarcreate",component:KamarcreateComponent},
  {path:"kamardetail/:id",component:KamardetailComponent},
  {path:"kamaredit/:id",component:KamareditComponent},
  {path:"penghuni",component:PenghuniComponent},
  {path:"penghunicreate",component:PenghunicreateComponent},
  {path:"penghunidetail/:id",component:PenghunidetailComponent},
  {path:"penghuniedit/:id",component:PenghunieditComponent}
  
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
    KoscreateComponent,
    KosdetailComponent,
    KoseditComponent,
    PenghuniComponent,
    KamarComponent,
    KamarcreateComponent,
    KamareditComponent,
    KamardetailComponent,
    PenghunicreateComponent,
    PenghunieditComponent,
    PenghunidetailComponent,
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
