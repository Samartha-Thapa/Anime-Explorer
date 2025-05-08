import axios, { AxiosInstance, AxiosError } from "axios";
import { JikanResponse } from "./types";

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
      const token = localStorage.getItem("token"); // Or use another storage mechanism
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
        const { status } = error.response;
        if (status === 401) {
          // Handle unauthorized (e.g., redirect to login or clear token)
          localStorage.removeItem("token");
        } else if (status === 422) {
          // Validation errors from Laravel
          const errors = error.response.data as { errors?: Record<string, string[]> };
          if (errors?.errors) {
            // Transform Laravel validation errors for easier consumption
            const formattedErrors: Record<string, string> = {};
            Object.keys(errors.errors).forEach((key) => {
              formattedErrors[key] = errors.errors[key][0]; // Take the first error message
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

  // Generic GET request
  export const fetchData = async (endpoint, params = {}) => {
    try {
      const response = await jikanApi.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error.message);
      throw error;
    }
  };

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

  export default api;