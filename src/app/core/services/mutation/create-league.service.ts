import { Injectable } from '@angular/core';
import { AccountOutput } from '@shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CreateLeagueService extends Mutation<AccountOutput> {

  document = gql`
  mutation CreateLeague($dto: Dto!) {
    createLeague(dto: $dto) {
      accountName
    }
  }
  `;
}
