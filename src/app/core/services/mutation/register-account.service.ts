import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Dto } from '@shared/model/interface.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterAccountService {

  readonly mutation = gql`
  mutation registerAcct($test: String) {
    registerAcct(test: $test)
}`;

  constructor(private apollo: Apollo) { }

  registerAcct(testt: string): Observable<any> {
    // this.thisDto.myAccountName = argName;
    // this.thisDto.password = argPass;

    return this.apollo.mutate({      
      mutation: this.mutation,
      variables: {
        test: testt
      }
    });
  }
}
