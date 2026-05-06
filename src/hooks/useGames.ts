import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { FetchResponse } from "./useData";
import type { Platform } from "./usePlatforms";
import apiClient from "../services/api-client";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{platform: Platform}];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) => 
   useQuery({
    queryKey: ['games'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
           },
        })
        .then(res => res.data),
  })

  export default useGames;

//  return useData<Game>('/games', { //using usedata
//    params: {
//     genres: gameQuery.genre?.id,
//     platforms: gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText
//   }
//   },
//     [ gameQuery ]
//   );




