import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> { //its here because we use this in tandem with apiClient almost always
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY, 
    }
})

class APIClient<T> {
    endpoint: string

    constructor ( endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => 
        axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);

    get = (id: number | string) => 
        axiosInstance
            .get<T>(`${this.endpoint}/${id}`)
            .then(res => res.data)
}

export default APIClient