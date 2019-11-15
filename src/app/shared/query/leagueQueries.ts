import gql from 'graphql-tag';

export const leagueQuery = gql`
query getLeague($dto: Dto){      
  league(dto: $dto)
}
`;

export const leaguesQuery = gql`
query allNames{
    leagues {
        leagueName
        teams {
            teamName
        }
    }
}
`;