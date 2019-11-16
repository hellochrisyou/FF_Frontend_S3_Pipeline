import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import { LeagueOutput } from 'src/app/shared/var/type';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AddPlayerService extends Mutation<LeagueOutput> {
  document = gql`
  mutation AddPlayer($dto: Dto!) {
    addPlayer(dto: $dto) {
      leagueName
    }
  }
  `;
}
