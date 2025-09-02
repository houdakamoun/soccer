import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomesComponent } from './components/homes/homes.component';

import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { ContainerComponent } from './components/container/container.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableMatchesComponent } from './components/table-matches/table-matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { TableTeamComponent } from './components/table-team/table-team.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

import { BannerComponent } from './components/banner/banner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { ColorDirective } from './directives/color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UnautorizedComponent } from './components/unautorized/unautorized.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomesComponent,

    LatestNewsComponent,
    ContainerComponent,
    NextMatchComponent,
    VideosComponent,
    OurBlogComponent,
    ContactComponent,
    AddMatchComponent,
    LoginComponent,
    SignupComponent,
    TableMatchesComponent,
    EditComponent,
    TableTeamComponent,
    AddTeamComponent,

    BannerComponent,
    MatchesComponent,
    MatchComponent,
    ColorDirective,
    ReversePipe,
    FilterPipe,
    AddPlayerComponent,
    TablePlayerComponent,
    EditPlayerComponent,
    SearchPipe,
    UnautorizedComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
