import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGQLService extends Query<String> {

  document = gql`
  query authenticateAccount {
      account(dto: Dto) {      
      }
  }
  `;

}
