import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as path from 'path';
import { HomesComponent } from './components/homes/homes.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableMatchesComponent } from './components/table-matches/table-matches.component';
import { EditComponent } from './components/edit/edit.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TableTeamComponent } from './components/table-team/table-team.component';

import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { AuthGuard } from './services/auth.guard';
import { UnautorizedComponent } from './components/unautorized/unautorized.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', component: HomesComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'Add-match',
    component: AddMatchComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  {
    path: 'table-match',
    component: TableMatchesComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'edit-match/:id',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Add-team',
    component: AddTeamComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'Add-team/:id',
    component: AddTeamComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'table-team',
    component: TableTeamComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin'] },
  },

  { path: 'banner', component: BannerComponent },
  {
    path: 'matches',
    component: MatchesComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin', 'user'] },
  },
  {
    path: 'teams',
    component: TeamsComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin', 'user'] },
  },
  {
    path: 'players',
    component: PlayersComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin', 'user'] },
  },

  { path: 'match', component: MatchComponent, canActivate: [AuthGuard] },
  { path: 'player', component: PlayerComponent, canActivate: [AuthGuard] },
  {
    path: 'Add-player',
    component: AddPlayerComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin'] },
  },
  {
    path: 'table-player',
    component: TablePlayerComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin'] },
  },
  {
    path: 'edit-player/:id',
    component: EditPlayerComponent,
    canActivate: [AuthGuard],
  },
  { path: 'unautorized', component: UnautorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
