import gql from 'graphql-tag';

export const createLeague = gql`
    mutation ($dto: Dto!) {
        createLeague(dto: $dto) {}
    }
    `;

export const tradeTeam = gql`
mutation ($dto: Dto!) {
    tradeTeam(dto: $dto) {}
  }
`;