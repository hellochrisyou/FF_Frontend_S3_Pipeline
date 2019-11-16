import { Injectable } from '@angular/core';
import { AccountOutput, tokenResponse } from 'src/app/shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Mutation<tokenResponse> {

  document = gql`
  mutation Register($dto: Dto!) {
    register(dto: $dto) {
      token
    }
}
`;
}
