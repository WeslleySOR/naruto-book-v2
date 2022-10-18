export interface ICharacter {
  name: string;
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