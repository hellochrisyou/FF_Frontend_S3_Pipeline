import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import { LeagueOutput } from '@shared/var/type';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AddPlayerMutateService extends Mutation<LeagueOutput> {
  document = gql`
  mutation AddPlayer($dto: Dto!) {
    addPlayer(dto: $dto) {
      leagueName
    } 
  }
  `;
}
