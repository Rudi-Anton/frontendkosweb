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

let routes : Routes = [
  {path:"penjaga",component:PenjagaComponent},
  {path:"penjagacreate",component:PenjagacreateComponent},
  {path:"penjagaedit/:id",component:PenjagaeditComponent},
  {path:"penjagadetail/:id",component:PenjagadetailComponent},
  {path:"gajipenjaga",component:GajipenjagaComponent},
  {path:"gajiedit/:id",component:GajipenjagaeditComponent},
  {path:"fiturkos",component:FiturkosComponent},
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
