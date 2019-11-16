import { Injectable } from '@angular/core';
import { LeagueOutput } from '@shared/var/type';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GetAllLeaguesService extends Mutation<LeagueOutput> {
  document = gql`
  mutation GetAllLeagues {
    getAllLeagues {
        leagueName
        teams {
            teamName
        }
    }
}
`;
}
