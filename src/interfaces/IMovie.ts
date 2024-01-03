export interface IMovie {
  attributes: IMovieProperties;
  id: string;
  links: {
    self: string;
  };
  type: string;
}

interface IMovieProperties {
  box_office: string;
  budget: string;
  cinematographers: any[];
  directors: any[];
  distributors: any[];
  editors: any[];
  music_composers: any[];
  poster: string;
  producers: any[];
  rating: string;
  release_date: string | Date;
  running_time: string;
  screenwriters: any[];
  slug: string;
  summary: string;
  title: string;
  trailer: string;
  wiki: string;
}
