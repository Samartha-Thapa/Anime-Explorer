import React from "react";

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

export interface JikanResponseManga {
  data: Manga[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
}

  export interface Manga {
  mal_id: number;
  title: string;
  url: string;
  title_english?: string;
  title_japanese?: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  type?: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  published?: {
    string?: string;
  };
  score: number | null;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  authors: { name: string }[];
  background?: string
  genres: { name: string }[];
  demographics?: { name: string }[];
  serializations: { mal_id: number; name: string }[]
  relations: {
    relation: string
    entry: {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  }[]
}


export interface Character {
  character: {
    mal_id: number
    url: string
    images: {
      jpg: {
        image_url: string
      }
      webp: {
        image_url: string
        small_image_url: string
      }
    }
    name: string
  }
  role: string
}

export interface MangaRecommendation {
  entry: {
    mal_id: number
    url: string
    images: {
      jpg: {
        image_url: string
        small_image_url: string
        large_image_url: string
      }
      webp: {
        image_url: string
        small_image_url: string
        large_image_url: string
      }
    }
    title: string
  }
  url: string
  votes: number
}

export interface GetMangaListParams {
  page?: number;
  status?: string;
  genres?: string;
  start_date?: string;
  rating?: string;
  q?: string;
  order_by?: string;
  sort?: string;
}

export interface GetAnimeListParams {
  page?: number;
  status?: string;
  genres?: string;
  year?: string;
  rating?: string;
  q?: string;
  order_by?: string;
  sort?: string;
}

export interface ValidationErrorResponse {
  errors: Record<string, string[]>;
  message?: string;
}

export interface Filters {
  genres: string[];
  status: string[];
  year?: string;
  rating?: string;
}

export interface FilterDesktopProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export interface FilterMobileProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export interface JikanQueryParams {
  page?: number;
  order_by?: string;
  sort?: 'asc' | 'desc';
  status?: string;
  genres?: string;
  start_date?: string;
  rating?: string;
  q?: string;
  limit?: number;
  filter?: string;
  type?: string;
}

export interface MangaListMainContentProps {
  filters: Filters;
}

export interface MangaApiParams {
  page: number;
  order_by?: string;
  sort?: string;
  genres?: string;
  status?: string;
  start_date?: string;
  rating?: string;
}

export interface StaffData {
    person: {
      mal_id: number;
      name: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
    };
    positions: string[];
  }

export interface StaffAnimeProps {
    animeId: number;
  }


export interface Staff {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  positions: string[];
}


export interface AnimeStaffResponse {
  data: Staff[];
}

export interface SideBarProps {
    anime: Anime;
  }
  