import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class accountGQL extends Query<Account> {
    readonly accountQuery = gql`
    query getAccount {
        account($name: String) {      
        }
      }
  `;
}