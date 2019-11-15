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


export function provideApollo(httpLink: HttpLink, authService: AuthService) {

    // Authorization header
    const authMiddleware = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers }) => ({
            headers: headers.append('Authorization', localStorage.getItem('token') || null).append('Accept', 'charset=utf-8').append('Content-Type', 'application/json'),
        }));
        return forward(operation);
    })

    const apolloErrorLink: ApolloLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(`GraphQL error: Message: ${message} Location: ${JSON.stringify(locations)} Path: ${path}`)
            );
        }
        if (networkError) {
            console.log(`GraphQL network error:`, networkError);
        }
    });

    // Logout Link
    // const logoutLink = onError(({ networkError }) => {
    //     // Reference: https://github.com/apollographql/apollo-link/issues/300
    //     if (
    //         networkError &&
    //         'statusCode' in networkError &&
    //         networkError.statusCode === 401
    //     ) authService.logout();
    // });

    // ?????????
    // const token = localStorage.getItem('token');
    // const auth = setContext((operation, context) => ({
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     },
    // }));

    const link = ApolloLink.from([new ApolloLinkTimeout(REQUEST_TIMEOUT), apolloErrorLink, authMiddleware, httpLink.create({ uri: 'http://localhost:8080/graphql' })]);
    const cache = new InMemoryCache();

    return {
        link,
        cache
    }
}

@NgModule({
    exports: [
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
