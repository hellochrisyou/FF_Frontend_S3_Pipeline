import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class LeagueGQL extends Query<Response> {
    document = gql`
    query getLeague{        
    }
  `;
}