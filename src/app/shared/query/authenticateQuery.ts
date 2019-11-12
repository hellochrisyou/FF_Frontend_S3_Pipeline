import gql from 'graphql-tag';

export const authenticateQuery = gql`
    query authenticateUser {
        authenticateUser($email: String, $password: String): {            
        }
    }
`;

export const leagueQuery = gql`
query getLeague{      
  league: League  
}
`;