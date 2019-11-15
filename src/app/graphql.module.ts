import { NgModule } from '@angular/core';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, GraphQLRequest } from 'apollo-link';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { setContext } from "apollo-link-context";
import { onError } from 'apollo-link-error'
import { AuthService } from './core';
import ApolloLinkTimeout from 'apollo-link-timeout';

const REQUEST_TIMEOUT = 30000;


const uri = 'http://localhost:8080/graphql';

export function provideApollo(httpLink: HttpLink, authService: AuthService) {
    const token = localStorage.getItem('token');

    let tmpHeaders = new Headers();
    tmpHeaders.append('Accept', 'application/json');
    tmpHeaders.append('Content-Type', 'application/json');
    tmpHeaders.append('Access-Control-Allow-Headers', '*');
    tmpHeaders.append('Access-Control-Allow-Origin', '*');
    tmpHeaders.append('Authorization', 'Bearer ' + token);

    const basic = setContext((operation, context) => ({
        headers: tmpHeaders
    }));

    // Get the authentication token from local storage if it exists
    // const auth = setContext((operation, context) => ({
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }));

    const passLink = ApolloLink.from([basic, httpLink.create({ uri, method: "GET", })]);

    // const apolloErrorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
    //     if (graphQLErrors) {
    //         graphQLErrors.map(({ message, locations, path }) =>
    //             console.log(`GraphQL error: Message: ${message} Location: ${JSON.stringify(locations)} Path: ${path}`)
    //         );
    //     }
    //     if (networkError) {
    //         console.log(`GraphQL network error:`, networkError);
    //     }
    // });

    // Logout Link
    // const logoutLink = onError(({ networkError }) => {
    //     // Reference: https://github.com/apollographql/apollo-link/issues/300
    //     if (
    //         networkError &&
    //         'statusCode' in networkError &&
    //         networkError.statusCode === 401
    //     ) authService.logout();
    // });

    return {
        link: uri,
        cache: new InMemoryCache(),
        fetchOptions: {
            mode: 'no-cors',
        },
        headers: tmpHeaders
    };
}

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: provideApollo,
            deps: [
                HttpLink
            ],
        },
    ],
})
export class GraphQLModule { }
