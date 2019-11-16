import gql from 'graphql-tag';

export const authenticate = gql`
     authenticate($dto: Dto) {
    leagues(dto: $dto){
        leagueName
        teams {
            teamName
        }
    }
}
`;
