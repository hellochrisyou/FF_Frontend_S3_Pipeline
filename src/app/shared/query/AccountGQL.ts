import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class AccountGQL extends Query<Response> {
    document = gql`
    query getAccount {
        account($name: String) {      
        }
      }
  `;
}