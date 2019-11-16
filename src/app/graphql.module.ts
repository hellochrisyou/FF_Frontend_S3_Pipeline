import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink, from } from 'apollo-link';


@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
})
export class GraphQLModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink,
    ) {
        const http = httpLink.create({ uri: 'http://localhost:8080/graphql' });

        // const logoutLink = onError(({ graphQLErrors, networkError }) => {
        //     if (graphQLErrors)
        //         graphQLErrors.map(({ message, locations, path }) =>
        //             console.log(
        //                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        //             ),
        //         );

        //     if (networkError) console.log(`[Network error]: ${networkError}`);
        // });

        const authMiddleware = new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            operation.setContext({
                headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || null)
            });

            return forward(operation);
        });

        const otherMiddleware = new ApolloLink((operation, forward) => {
            // add the authorization to the headers
            // we assume `headers` as a defined instance of HttpHeaders
            operation.setContext(({ headers }) => ({
                headers: headers.append('Access-Control-Allow-Origin', '*')
            }));

            return forward(operation);
        })
        apollo.create({
            link: from([authMiddleware, otherMiddleware, http]),
            cache: new InMemoryCache()
        });

    }
}