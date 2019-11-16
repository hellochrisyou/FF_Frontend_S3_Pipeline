import gql from 'graphql-tag';

export const leagueQuery = gql`
query getLeague($dto: Dto){      
  league(dto: $dto)
}
`;

export const getAllLeagues = gql`
query getAllLeagues{
    leagues {
        leagueName
        teams {
            teamName
        }
    }
}
`;