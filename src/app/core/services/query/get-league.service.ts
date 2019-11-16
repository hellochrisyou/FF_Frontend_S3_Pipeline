import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query, Mutation } from 'apollo-angular';
import { LeagueOutput } from '@shared/var/type';

@Injectable({
  providedIn: 'root'
})
export class GetLeagueService extends Mutation<LeagueOutput> {

  document = gql`
  mutation getLeague($dto: Dto){      
    getLeague(dto: $dto) {
    leagueName
    count
    current_week
    start_week
    draftOrder
    status
    teams
    }
  }
  `;
}
