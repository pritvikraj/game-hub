import axios from "axios";

export interface FetchResponse<T> { //its here because we use this in tandem with apiClient almost always
  count: number;
  results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY, 
    }
})