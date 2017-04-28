import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

import { routing } from './app.routing';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { ArtWalkComponent } from './art-walk/art-walk.component';
import { YhteystiedotComponent } from './yhteystiedot/yhteystiedot.component';
import { LapsilleComponent } from './lapsille/lapsille.component';
import { MuseotComponent } from './museot/museot.component';
import { RavintolatKahvilatComponent } from './ravintolat-kahvilat/ravintolat-kahvilat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontpageComponent,
    EventComponent,
    FooterComponent,
    ImageComponent,
    ArtWalkComponent,
    YhteystiedotComponent,
    LapsilleComponent,
    MuseotComponent,
    RavintolatKahvilatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
