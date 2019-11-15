import gql from 'graphql-tag';

export const authenticateQuery = gql`
    query authenticateAccount($dto: Dto) {
        account(dto: $dto) {      
        }
    }
    `;
