import useGenres from "./useGenres";

const useGenre = (id?: number) => { //doesnt particularly make sense to use optional parameter but fuck it
    const { data: genres } = useGenres();
    return genres?.results.find((g) => g.id === id);
}

export default useGenre