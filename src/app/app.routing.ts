import {Routes, RouterModule} from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {EventComponent} from './event/event.component';

const APP_ROUTES: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'tapahtumat', component: EventComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
