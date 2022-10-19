import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      name
      about {
        html
      }
      images {
        url
      }
      slug
    }
  }
`;
