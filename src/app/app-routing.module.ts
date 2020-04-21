import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';
import { RocketsComponent } from './rockets/rockets.component';
import { RocketComponent } from './rocket/rocket.component';

const routes: Routes = [
  { path: 'history', redirectTo: '' },
  { path: 'rockets', component: RocketsComponent },
  { path: 'rockets/:id', component: RocketComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HistoryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
