export interface IClan {
  name: string;
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