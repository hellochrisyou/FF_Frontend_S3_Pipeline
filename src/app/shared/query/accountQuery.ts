import gql from 'graphql-tag';

export const authenticateQuery = gql`
    query authenticateAccount {
        account(dto: Dto) {      
        }
    }
    `;
