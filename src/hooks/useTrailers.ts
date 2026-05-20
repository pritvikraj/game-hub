import { useQuery } from "@tanstack/react-query"
import APIClient, { type FetchResponse } from "../services/api-client"
import type { Trailer } from "../entities/Trailer";

const trailersClient = new APIClient<FetchResponse<Trailer>>('/games')

const useTrailers = (slug: string) => 
    useQuery({
        queryKey: ['trailers', slug],
        queryFn: () => 
            trailersClient.get(`${slug}/movies`)
    })

export default useTrailers