import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TogglePlayerGQLService extends Query<Account> {

  document = gql`
  mutation ($dto: Dto!) {
          togglePlayer(dto: $dto) {}
        }
  `;

}
