export interface IBook {
  attributes: IBookProperties;
  id: string;
  links: {
    self: string;
  };
  relationships: {
    chapters: IChapter[];
  };
  type: string;
}

interface IBookProperties {
  author: string;
  cover: string;
  dedication: string;
  pages: number;	
  release_date: string | Date;
  summary: string;
  slug: string;
  title: string;
  wiki: string;
}

interface IChapter {
  id: string;
  type: string;
}