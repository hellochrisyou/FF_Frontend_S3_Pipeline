import { Injectable } from '@angular/core';
import { AccountOutput } from '@shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class TradeTeamService extends Mutation<AccountOutput> {

  document = gql`
  mutation TradeTeam($dto: Dto!) {
    tradeTeam(dto: $dto) {
      accountName: string;
    }
  }
`;
}
