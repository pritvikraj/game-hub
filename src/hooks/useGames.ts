import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{platform: Platform}];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
   useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: gameQuery.genreId,
            platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
           },
          })
           .then(res => res.data),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined
      },
      staleTime: 24 * 60 * 60 * 1000 //24h
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




