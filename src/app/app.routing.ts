import {Routes, RouterModule} from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {EventComponent} from './event/event.component';
import {ArtWalkComponent} from './art-walk/art-walk.component';

const APP_ROUTES: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'artwalk', component: ArtWalkComponent}
  // { path: 'tapahtumat', component: EventComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
