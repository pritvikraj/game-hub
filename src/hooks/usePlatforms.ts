// // import useData from "./useData";
// import platforms from "../data/platforms";

// // const usePlatforms = () => useData<Platform>('/platforms');

// const usePlatforms = () => (
//   {data: platforms, isLoading: false, error: null} //static method
// )

// export default usePlatforms;

//Fetching platforms using reactquery

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import type Platform from "../entities/Platform";

const platformClient = new APIClient<Platform>('/platforms');

const usePlatforms = () => {
    return useQuery({
      queryKey: ['platforms'],
      queryFn: () => 
          platformClient.getAll(),
    //   staleTime: 24 * 60 * 60 * 1000, //24h
    staleTime: ms('24h'),
    initialData: platforms,
    })
}

export default usePlatforms