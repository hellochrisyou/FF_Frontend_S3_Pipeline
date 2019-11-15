import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';
@Injectable({
  providedIn: 'root'
})
export class CreateTeamGQLService extends Query<Account> {

  document = gql`
  mutation ($dto: Dto!) {
      createTeam(dto: $dto) {}
  }
  `;
}
