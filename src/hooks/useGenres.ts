// import { data } from "framer-motion/client";
// import useData from "./useData";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => {
//    return useData<Genre>('./genres');
// } - dynamic data

//static data
const useGenres = () => (
  {data: genres, isLoading: false, error: null}
)


export default useGenres;