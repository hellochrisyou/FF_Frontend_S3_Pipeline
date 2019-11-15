import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';
import { League } from 'src/app/shared/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class AddPlayerGQLService extends Query<League> {

  document = gql`
  mutation ($dto: Dto!) {
      addPlayer(dto: $dto) {}
  }
  `;
}
