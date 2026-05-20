import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";
import type { Game } from "../entities/Game";

const gamesClient = new APIClient<Game>('/games');  // outside hook so its created once

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>>({
   queryKey: ['games', gameQuery],
   queryFn: ({ pageParam }) =>
     gamesClient
       .getAll( {
         params: {
           genres: gameQuery.genreId,
           platforms: gameQuery.platformId,
           ordering: gameQuery.sortOrder,
           search: gameQuery.searchText,
           page: pageParam,
          },
         }),
     initialPageParam: 1,
     getNextPageParam: (lastPage, allPages) => {
       return lastPage.next ? allPages.length + 1 : undefined
     },
     // staleTime: 24 * 60 * 60 * 1000 //24h
     staleTime: ms('24h'),
 })
}

  export default useGames;





