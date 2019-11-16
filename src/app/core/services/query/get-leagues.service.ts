import { Injectable } from '@angular/core';
import { LeagueOutput } from 'src/app/shared/var/type';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GetLeaguesService extends Mutation<LeagueOutput> {
  document = gql`
  mutation getAllLeagues {
    getAllLeagues {
        leagueName
        teams {
            teamName
        }
    }
}
`;
}
