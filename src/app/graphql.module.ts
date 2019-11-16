import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink, from, concat } from 'apollo-link';
import { TOKEN } from './shared/var/globals';
import { setContext } from "apollo-link-context";


// @NgModule({
//     imports: [
//         HttpClientModule,
//         ApolloModule,
//         HttpLinkModule
//     ]
// })

const uri = 'http://localhost:9090/graphql';

export function provideApollo(httpLink: HttpLink) {

    const basicHeader = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .append('Authorization', localStorage.getItem(TOKEN))
        .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods')
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/graphql')
        ;


    if (localStorage.getItem(TOKEN) != null) {
        basicHeader.append('Authorization', localStorage.getItem(TOKEN));
    } else {
        basicHeader.append('Authorization', null);
    }

    const basic = setContext((op, ctx) => ({
        headers: basicHeader
    }));

    const token = localStorage.getItem(TOKEN);
    const auth = setContext((operation, ctx) => ({
        headers: ctx.headers.append('Authorization', `Bearer ${token}`)
    }));

    // Error logger
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
            );
        if (networkError) {
            console.log('[Network error]', networkError);
            console.log('[graphQLErrors]', graphQLErrors);
        };
    });

    const link = ApolloLink.from([basic, auth, errorLink, httpLink.create({ uri })]);

    return {
        link,
        cache: new InMemoryCache(),
        useGETForQueries: true
    }
}


// export function provideApollo(httpLink: HttpLink) {

//     const basic = new ApolloLink((operation, forward) => {
//         operation.setContext({
//             headers: new HttpHeaders()
//                 .append('Access-Control-Allow-Origin', 'http://localhost:4200')
//                 // .append('Authorization', localStorage.getItem(TOKEN))
//                 .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
//                 .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, X-Requested-With, Origin, Accept, Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods')
//                 .append('Content-Type', 'application/json')
//         });
//         return forward(operation);
//     });

//     const token = localStorage.getItem(TOKEN);
//     const auth = setContext((operation, ctx) => ({
//         headers: ctx.headers.append('Authorization', `Bearer ${token}`)
//     }));


//     // Error logger
//     const errorLink = onError(({ graphQLErrors, networkError }) => {
//         if (graphQLErrors)
//             graphQLErrors.map(({ message, locations, path }) =>
//                 console.log(
//                     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//                 ),
//             );
//         if (networkError) {
//             console.log('[Network error]', networkError);
//             console.log('[graphQLErrors]', graphQLErrors);
//         };
//     });

//     const link = ApolloLink.from([basic, auth, errorLink, httpLink.create({ uri })]);
//     const cache = new InMemoryCache();

//     return {
//         link,
//         cache
//     }
// }

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ],
    providers: [{
        provide: APOLLO_OPTIONS,
        useFactory: provideApollo,
        deps: [HttpLink]
    }]
})
export class GraphQLModule {
}
    // const link = httpLink.create({ uri: 'http://localhost:9090/graphql', });
    // const middlewareLink = new ApolloLink((operation, forward) => {
    //     operation.setContext({
    //         headers: new HttpHeaders()
    //             .append('Access-Control-Allow-Origin', 'http://localhost:4200')
    //             .append('Authorization', localStorage.getItem(TOKEN))
    //             .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
    //             .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, X-Requested-With, Origin, Accept, Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods')
    //             .append('Content-Type', 'application/json')
    //     });
    //     return forward(operation);
    // });

    // const http = httpLink.create({ uri: 'http://localhost:9090/graphql' });

    // const logoutLink = onError(({ graphQLErrors, networkError }) => {
    //     if (graphQLErrors)
    //         graphQLErrors.map(({ message, locations, path }) =>
    //             console.log(
    //                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    //             ),
    //         );

    //     if (networkError) console.log(`[Network error]: ${networkError}`);
    // });




    // const authMiddleware = new ApolloLink((operation, forward) => {
    //     // add the authorization to the headers
    //     operation.setContext({
    //         headers: new HttpHeaders()
    //             .append('Access-Control-Allow-Origin', '*')
    //             .append('Authorization', localStorage.getItem(TOKEN))
    //             .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
    //             .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, X-Requested-With, Origin, Accept, Content-Type, Access-Control-Allow-Headers, Authorization, Access-Control-Allow-Methods')
    //             .append('Content-Type', 'application/json')
    //     });

    //     return forward(operation);
    // });
    // const concatedLink = concat(errorLink, middlewareLink).concat(link);

    // apollo.create({
    //     link: concatedLink,
    //     cache: new InMemoryCache()
    // });
// }
// }