import gql from 'graphql-tag';

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