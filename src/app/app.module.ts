// import { AuthService } from './core/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { RoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
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
    // GraphQLModule,
    // MatFormFieldModule,
    // MatInputModule,
    // SharedModule,
    RoutingModule
  ],
  providers: [
    // {
    //   provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher
    // },    
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

