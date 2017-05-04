import {Routes, RouterModule} from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {EventComponent} from './event/event.component';
import {ArtWalkComponent} from './art-walk/art-walk.component';
import { YhteystiedotComponent } from './yhteystiedot/yhteystiedot.component';
import { LapsilleComponent } from './lapsille/lapsille.component';
import { MuseotComponent } from './museot/museot.component';
import {RavintolatKahvilatComponent} from './ravintolat-kahvilat/ravintolat-kahvilat.component';
import {LevyhalliComponent} from './levyhalli/levyhalli.component';

const APP_ROUTES: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'artwalk', component: ArtWalkComponent},
  { path: 'tapahtumat', component: EventComponent},
  { path: 'yhteystiedot', component: YhteystiedotComponent },
  { path: 'lapsille', component: LapsilleComponent },
  { path: 'museot', component: MuseotComponent },
  { path: 'ravintolat-kahvilat', component: RavintolatKahvilatComponent },
  { path: 'levyhalli', component: LevyhalliComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
