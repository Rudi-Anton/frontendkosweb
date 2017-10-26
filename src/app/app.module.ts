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
import { PenjagacreateComponent } from './penjaga/penjagacreate/penjagacreate.component';
import { PenjagadetailComponent } from './penjaga/penjagadetail/penjagadetail.component';
import { PenjagaeditComponent } from './penjaga/penjagaedit/penjagaedit.component';
import { GajipenjagaComponent } from './gajipenjaga/gajipenjaga.component';
import { FiturkosComponent } from './fiturkos/fiturkos.component';
import { GajipenjagaeditComponent } from './gajipenjaga/gajipenjagaedit/gajipenjagaedit.component';
import { KosComponent } from './kos/kos.component';
import { KamarComponent } from './kamar/kamar.component';
import { PenghuniComponent } from './penghuni/penghuni.component';
import { KoscreateComponent } from './kos/koscreate/koscreate.component';
import { KosdetailComponent } from './kos/kosdetail/kosdetail.component';
import { KoseditComponent } from './kos/kosedit/kosedit.component';

let routes : Routes = [
  {path:"penjaga",component:PenjagaComponent},
  {path:"penjagacreate",component:PenjagacreateComponent},
  {path:"penjagaedit/:id",component:PenjagaeditComponent},
  {path:"penjagadetail/:id",component:PenjagadetailComponent},
  {path:"gajipenjaga",component:GajipenjagaComponent},
  {path:"gajiedit/:id",component:GajipenjagaeditComponent},
  {path:"fiturkos",component:FiturkosComponent},
  {path:"kos",component:KosComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    PenjagaComponent,
    PenjagacreateComponent,
    PenjagadetailComponent,
    PenjagaeditComponent,
    GajipenjagaComponent,
    FiturkosComponent,
    GajipenjagaeditComponent,
    KosComponent,
    KamarComponent,
    PenghuniComponent,
    KoscreateComponent,
    KosdetailComponent,
    KoseditComponent,
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
