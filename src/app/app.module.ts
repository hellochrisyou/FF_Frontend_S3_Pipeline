import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AuthService } from './core/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InSeasonModule } from './in-season/in-season.module';
import { LeagueService } from './service/model/league.service';
import { HttpRequestInterceptor } from './core/interceptor/http-request.interceptor';
import { AuthGuardService } from './core/auth/auth-guard';
import { ApiService } from './service/api/api.service';
import { AddPlayerService } from './service/emit/add-player.service';
import { WaiverService } from './service/concrete/waiver.service';
import { DraftService } from './service/concrete/draft.service';

// import { LastSeasonRestApiService } from './service/nfl-api/last-season-rest-api.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    InSeasonModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "https://o5x5jzoo7z.sse.codesandbox.io/graphql"
          })
        }
      },
      deps: [HttpLink]
    },
    AuthService,
    LeagueService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    AddPlayerService,
    WaiverService,
    DraftService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
