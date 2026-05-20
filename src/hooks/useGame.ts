import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type { GameDetail } from "../entities/GameDetail";

const gamesClient = new APIClient<GameDetail>('/games');  // outside hook so its created once

const useGame = (slug?: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => gamesClient.get(slug!), 
})
  
export default useGame