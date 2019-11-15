import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';
import { League } from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class QueryLeagueGQLService extends Query<League> {

  document = gql`
  query getLeague{      
    league: League  
  }
  `;
}
