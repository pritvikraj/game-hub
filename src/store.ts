import {create} from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void; 
  resetQuery: () => void;
}

    const useGameQueryStore = create<GameQueryStore>(set => ({
        gameQuery: {} as GameQuery,
        // setSearchText: (searchText) => set((s) => ({gameQuery: {...s.gameQuery, searchText}})), 
        setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
        setGenreId: (genreId) => set((s) => ({gameQuery: {...s.gameQuery, genreId}})),
        setPlatformId: (platformId) => set((s) => ({gameQuery: {...s.gameQuery, platformId}})),
        setSortOrder: (sortOrder) => set((s) => ({gameQuery: {...s.gameQuery, sortOrder}})),
        resetQuery: () => set(() => ({gameQuery: {} as GameQuery})),
    }))

    export default useGameQueryStore