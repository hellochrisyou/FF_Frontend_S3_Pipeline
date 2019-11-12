// import { AuthService } from './core/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InSeasonModule } from './in-season/in-season.module';
import { LeagueService } from './service/model/league.service';
import { HttpRequestInterceptor } from './core/interceptor/http-request.interceptor';
// import { AuthGuardService } from './core/auth/auth-guard';
import { ApiService } from './service/api/api.service';
import { AddPlayerService } from './service/emit/add-player.service';
import { WaiverService } from './service/concrete/waiver.service';
import { DraftService } from './service/concrete/draft.service';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { routingModule } from "./app-routing.module";
import { CreateTeamModule } from './create-team/create-team.module';
import { DraftModule } from './draft/draft.module';
import { CreateLeagueModule } from './create-league/create-league.module';
import { CreateLeagueGQL } from './shared/mutation/CreateLeagueGQL';
import { CreateTeamGQL } from './shared/mutation/CreateTeamGQL';
import { AddPlayerGQL } from './shared/mutation/AddPlayerGQL';
import { AddWaiverGQL } from './shared/mutation/AddWaiverGQL';
import { TogglePlayerGQL } from './shared/mutation/TogglePlayerGQL';
import { TradeTeamGQL } from './shared/mutation/TradeTeamGQL';
import { AccountGQL } from './shared/query/AccountGQL';
import { AllLeaguesGQL } from './shared/query/AllLeaguesGQL';
import { LeagueGQL } from './shared/query/LeagueGQL';
import { GraphQLModule } from './graphql.module';

// import { LastSeasonRestApiService } from './service/nfl-api/last-season-rest-api.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CreateLeagueModule,
    CreateTeamModule,
    DraftModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    InSeasonModule,
    GraphQLModule,
    routingModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:8080/graphql"
          })
        }
      },
      deps: [HttpLink]
    },
    // AuthService,
    LeagueService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    AddPlayerService,
    WaiverService,
    DraftService,
    CreateLeagueGQL,
    CreateTeamGQL,
    AddPlayerGQL,
    AddWaiverGQL,
    TogglePlayerGQL,
    TradeTeamGQL,
    AccountGQL,
    AllLeaguesGQL,
    LeagueGQL
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
