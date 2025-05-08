// export interface Anime {
//   mal_id: number;
//   title: string;
//   images: {
//     jpg: {
//       image_url: string;
//     };
//   };
//   score: number | null;
//   episodes: number | null;
//   status: string;
//   genres: { name: string }[];
//   studios: { name: string }[];
// }

export type AnimeId = string;

export interface Anime {
  mal_id: number;
  title: string;
  title_japanese?: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  trailer?: {
    youtube_id?: string;
  };
  type?: string;
  source?: string;
  episodes: number | null;
  status: string;
  aired?: {
    string?: string;
  };
  duration?: string;
  rating?: string;
  score: number | null;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  season?: string;
  year?: number;
  studios: { name: string }[];
  genres: { name: string }[];
  themes?: { name: string }[];
  demographics?: { name: string }[];
}


export interface JikanResponse {
  data: Anime[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
}