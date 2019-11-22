import { AccountOutput } from '@shared/var/type';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends Mutation<AccountOutput> {

  document = gql`
  mutation register($dto: DtoInput) {
    register(dto: $dto) {
        token
    }
}`;
}
 