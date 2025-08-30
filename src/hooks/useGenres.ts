import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//static data
const useGenres = () => (
  {data: genres, isLoading: false, error: null}
)


export default useGenres;