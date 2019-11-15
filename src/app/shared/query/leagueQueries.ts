import gql from 'graphql-tag';

export const leagueQuery = gql`
query getLeague{      
  league: League  
}
`;

export const leaguesQuery = gql`
query allNames{
    leagues(dto: Dto) {
        leagueName
        teams {
            teamName
        }
    }
}
`;