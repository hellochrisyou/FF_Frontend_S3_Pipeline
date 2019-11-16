import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import { tokenResponse } from '@shared/var/type';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService extends Mutation<tokenResponse> {

  document = gql`
  mutation AuthenticateService($dto: Dto) {
    authenticate(dto: $dto)  {
      token
    }
}
`;
} 