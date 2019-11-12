import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class TradeTeamGQL extends Mutation {
    document = gql`
    mutation ($dto: Dto!) {
        tradeTeam(dto: $dto) {}
      }
  `;
}