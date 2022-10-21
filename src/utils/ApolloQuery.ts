import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      name
      clan {
        name
      }
      bijuu {
        name
      }
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

export const GET_CLANS_QUERY = gql`
  query {
    clans {
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

export const GET_BIJUUS_QUERY = gql`
  query {
    bijuus {
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
