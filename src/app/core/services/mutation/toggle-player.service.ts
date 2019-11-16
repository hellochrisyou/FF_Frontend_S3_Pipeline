import { Injectable } from '@angular/core';
import { AccountOutput } from 'src/app/shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})
export class TogglePlayerService extends Mutation<AccountOutput> {

  document = gql`
  mutation TogglePlayer($dto: Dto!) {
    togglePlayer(dto: $dto) {
      accountName
    }
  }
`;
}
