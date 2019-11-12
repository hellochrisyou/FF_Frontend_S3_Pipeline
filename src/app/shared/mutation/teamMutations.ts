import gql from 'graphql-tag';

export const addPlayer = gql`
    mutation ($dto: Dto!) {
        addPlayer(dto: $dto) {}
    }
    `;

export const addWaiver = gql`
    mutation ($dto: Dto!) {
        addWaiver(dto: $dto) {}
    }
    `;

export const createTeam = gql`
    mutation ($dto: Dto!) {
        createTeam(dto: $dto) {}
    }
    `;

export const togglePlayer = gql`
    mutation ($dto: Dto!) {
            togglePlayer(dto: $dto) {}
          }
    `;

