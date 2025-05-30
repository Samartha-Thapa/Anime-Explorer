import axios, { AxiosInstance, AxiosError } from "axios";
import { JikanResponse, JikanResponseManga, ValidationErrorResponse, GetMangaListParams, GetAnimeListParams, JikanQueryParams } from "./types";

// Creating an Axios instance
const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Adding a request interceptor to include the auth token 
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Add a response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // Handle common errors globally
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          // Handle unauthorized (e.g., redirect to login or clear token)
          localStorage.removeItem("token");
        } else if (status === 422) {
          // Validation errors from Laravel
          const errors = data as ValidationErrorResponse;
          if (errors?.errors) {
            // Transform Laravel validation errors for easier consumption
            const formattedErrors: Record<string, string> = {};
            Object.keys(errors.errors).forEach((key) => {
              // Add type check for the error array
              if (errors.errors[key] && errors.errors[key].length > 0) {
                formattedErrors[key] = errors.errors[key][0]; // Take the first error message
              }
            });
            return Promise.reject({ ...error, formattedErrors });
          }
        }
      }
      return Promise.reject(error);
    }
  );
  
  const jikanApi: AxiosInstance = axios.create({
    baseURL: 'https://api.jikan.moe/v4',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const getAnimeList = async (page: number = 1) => {
  try {
    const response = await jikanApi.get(`/anime?page=${page}`);
    return response.data;
  } catch(error){
    console.error('Error fetching anime list:', error);
    throw error;
  }
}

  // Fetching Anime Data from Jikan API
  export const searchAnime = async (query: string, page: number = 1) => {
    try {
      const response = await jikanApi.get('/anime', {
        params: {
          q: query, // Search query
          page, // Pagination
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching anime:', error);
      throw error;
    }
  };
  
  export const getAnimeById = async (id: number) => {
    try {
      const response = await jikanApi.get(`/anime/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching anime by ID:', error);
      throw error;
    }
  };

  export const getTopAnime = async (
    limit: number = 20,
    filter?:string,
    type?:string,
    sort?:string,
  ): Promise<JikanResponse> => {
    try {
      const response = await jikanApi.get('/top/anime', {
        params: {
          limit, // Limit the number of results (Jikan supports this parameter)
          filter, // e.g., 'airing' for trending
          type, // e.g., 'tv'
          sort,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top anime:', error);
      throw error;
    }
  };

  export const getUpcomingAnime = async (limit: number = 12) => {
    try {
      const response = await jikanApi.get('/seasons/upcoming', {
        params: {
          limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching upcoming anime:', error);
      throw error;
    }
  };

  export const getMangaList = async (params: GetMangaListParams = {}): Promise<JikanResponseManga> => {
    try {
      const queryParams: JikanQueryParams = {
        page: params.page || 1,
        order_by: params.order_by === "newest" ? "start_date" : params.order_by,
        sort: params.order_by === "title" ? "asc" : "desc",
      };
      
      if (params.status) queryParams.status = params.status;
      if (params.genres) queryParams.genres = params.genres;
      if (params.start_date) {
        queryParams.start_date = params.start_date === "older" ? "1900-01-01" : `${params.start_date}-01-01`;
      }
      if (params.rating) queryParams.rating = params.rating;
      if (params.q) queryParams.q = params.q;
  
      const response = await jikanApi.get("/manga", { params: queryParams });
      return response.data;
    } catch (error) {
      console.error("Error fetching manga list:", error);
      throw error;
    }
  };

export const searchManga = async (
  query: string,
  page: number = 1,
  filters: GetMangaListParams = {}
): Promise<JikanResponseManga> => {
  try {
    const queryParams: JikanQueryParams = { q: query, page };
    if (filters.status) queryParams.status = filters.status;
    if (filters.genres) queryParams.genres = filters.genres;
    if (filters.start_date) {
      queryParams.start_date = filters.start_date === "older" ? "1900-01-01" : `${filters.start_date}-01-01`;
    }
    if (filters.rating) queryParams.rating = filters.rating;

    const response = await jikanApi.get("/manga", { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("Error searching manga:", error);
    throw error;
  }
};

export const getTopManga = async (limit: number = 20, type?: string): Promise<JikanResponseManga> => {
  try {
    const response = await jikanApi.get("/top/manga", {
      params: {
        limit,
        type,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top manga:", error);
    throw error;
  }
};


export async function getMangaById(id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch manga: ${response.statusText}`)
  }
  return await response.json()
}

export async function getMangaCharacters(id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}/characters`)
  if (!response.ok) {
    throw new Error(`Failed to fetch manga characters: ${response.statusText}`)
  }
  return await response.json()
}

export async function getMangaRecommendations(id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}/recommendations`)
  if (!response.ok) {
    throw new Error(`Failed to fetch manga recommendations: ${response.statusText}`)
  }
  return await response.json()
}
export async function getAnimeListFil(params: GetAnimeListParams = {}): Promise<JikanResponse> {
  const baseUrl = "https://api.jikan.moe/v4/anime";
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append("page", params.page.toString());
  if (params.status) queryParams.append("status", params.status);
  if (params.genres) queryParams.append("genres", params.genres);
  if (params.year) {
    if (params.year === "older") {
      queryParams.append("start_date", "1900-01-01");
    } else {
      queryParams.append("start_date", `${params.year}-01-01`);
    }
  }
  if (params.rating) queryParams.append("rating", params.rating);
  if (params.q) queryParams.append("q", params.q);
  if (params.order_by) queryParams.append("order_by", params.order_by);
  if (params.sort) queryParams.append("sort", params.sort);

  const response = await fetch(`${baseUrl}?${queryParams.toString()}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

  export default api;