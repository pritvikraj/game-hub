import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface GameDetail {
    description: string;
    name: string;
}

const gamesClient = new APIClient<GameDetail>('/games');  // outside hook so its created once

const useGame = (slug?: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => gamesClient.get(slug!), 
})
  
export default useGame