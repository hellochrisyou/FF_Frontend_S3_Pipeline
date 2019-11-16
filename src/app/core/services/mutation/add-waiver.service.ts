import { Injectable } from '@angular/core';
import { AccountOutput } from '@shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AddWaiverService extends Mutation<AccountOutput> {
  document = gql`
  mutation AddWaiver($dto: Dto!) {
    addWaiver(dto: $dto) {
      accountName
    }
}
`;

}
