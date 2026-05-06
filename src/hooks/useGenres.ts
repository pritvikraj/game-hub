//part 1

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// // import { data } from "framer-motion/client";
// // import useData from "./useData";

// import genres from "../data/genres";

// export interface Genre {
//   id: number;
//   name: string;
//   image_background: string;
// }

// // const useGenres = () => {
// //    return useData<Genre>('./genres');
// // } - dynamic data

// //static data
// const useGenres = () => (
//   {data: genres, isLoading: false, error: null}
// )

// export default useGenres;

//part 2 - using react query

import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import type { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
    return useQuery({
      queryKey: ['genres'],
      queryFn: () => 
          apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
      staleTime: 24 * 60 * 60 * 1000, //24h
      initialData: {count: genres.length, results: genres} //shape of fetchresponse obj
    })
}

export default useGenres 