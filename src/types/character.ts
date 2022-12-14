export interface ICharacter {
  name: string;
  clan: {
    name: string | null;
    __typename: string;
  };
  bijuu: {
    name: string | null;
    __typename: string;
  };
  slug: string;
  about: IAbout | null;
  images: IImage[] | [];
  __typename: string;
}

interface IAbout {
  html: string;
  __typename: string;
}

interface IImage {
  url: string;
  __typename: string;
}
