import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { AllNames } from '../model/interface.model';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})


export class AllLeaguesGQL extends Query<AllNames> {
    document = gql`
    query allNames{
            leagues {
                leagueName
                teams {
                    teamName
                }
            }
    }
  `;
}