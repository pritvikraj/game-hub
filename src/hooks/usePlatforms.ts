// // import useData from "./useData";
// import platforms from "../data/platforms";

// // const usePlatforms = () => useData<Platform>('/platforms');

// const usePlatforms = () => (
//   {data: platforms, isLoading: false, error: null} //static method
// )

// export default usePlatforms;

//Fetching platforms using reactquery

import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import type { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => {
    return useQuery({
      queryKey: ['platforms'],
      queryFn: () => 
          apiClient
            .get<FetchResponse<Platform>>('/platforms')
            .then(res => res.data),
      staleTime: 24 * 60 * 60 * 1000, //24h
      initialData: {count: platforms.length, results: platforms} //shape of fetchresponse obj
    })
}

export default usePlatforms