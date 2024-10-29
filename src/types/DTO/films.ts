export type FilmByIdDTO = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  adult: boolean;
  tagline?: string;
};

export type FilmByGenreDTO = {
  id: number;
  backdrop_path: string;
  title: string;
};
