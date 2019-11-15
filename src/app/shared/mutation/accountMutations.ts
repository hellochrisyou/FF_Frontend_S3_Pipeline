import gql from 'graphql-tag';

export const register = gql`
    mutation ($dto: Dto!) {
        register(dto: $dto)     
    }
    `;