import { useQuery } from "@tanstack/react-query"
import APIClient, { type FetchResponse } from "../services/api-client"
import type { Screenshot } from "../entities/Screenshot";

const screenshotClient = new APIClient<FetchResponse<Screenshot>>('/games')

const useScreenshots = (gameId: number) => 
    useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: () => 
            screenshotClient.get(`${gameId}/screenshots`)
    })

export default useScreenshots