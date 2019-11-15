// import { AuthService } from './core/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InSeasonModule } from './in-season/in-season.module';
import { LeagueService } from './core/services/model/league.service';
import { HttpRequestInterceptor } from './core/interceptor-dont-need/http-request.interceptor';
// import { AuthGuardService } from './core/auth/auth-guard';
import { ApiService } from './core/services/api/api.service';
import { AddPlayerService } from './core/services/emit/add-player.service';
import { WaiverService } from './core/services/concrete/waiver.service';
import { DraftService } from './core/services/concrete/draft.service';
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RoutingModule } from "./app-routing.module";
import { CreateTeamModule } from './create-team/create-team.module';
import { DraftModule } from './draft/draft.module';
import { CreateLeagueModule } from './create-league/create-league.module';
import { GraphQLModule } from './graphql.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/services/auth.service';
import { MatFormFieldModule, MatHint, MatLabel, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorModule } from './error/error.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    CoreModule,
    // FormsModule,
    MaterialModule,
    // CreateLeagueModule,
    // CreateTeamModule,
    // DraftModule,
    // ErrorModule,
    // HomeModule,
    // LoginModule,
    // InSeasonModule,
    FormsModule,
    // HttpClientModule,
    // MaterialModule,
    // MatDialogModule,
    ReactiveFormsModule,
    GraphQLModule,
    // MatFormFieldModule,
    // MatInputModule,
    // SharedModule,
    RoutingModule
  ],
  providers: [
    // {
    //   provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher
    // },
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
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

