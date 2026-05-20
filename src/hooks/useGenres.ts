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
import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genresClient = new APIClient<Genre>('genres')

const useGenres = () => {
    return useQuery({
      queryKey: ['genres'],
      queryFn: () => 
          genresClient
            .getAll(),
            
      // staleTime: 24 * 60 * 60 * 1000, //24h
      staleTime: ms('24h'),
      initialData: genres
    })
}

export default useGenres 