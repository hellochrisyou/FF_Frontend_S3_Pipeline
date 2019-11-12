import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class CreateTeamGQL extends Mutation {
    document = gql`
    mutation ($dto: Dto!) {
        createTeam(dto: $dto) {}
      }
  `;
}