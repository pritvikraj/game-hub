import type { Game } from "./Game";

export interface GameDetail extends Game {
    description: string;
    publishers: { id: number; name: string }[];
    genres: { id: number; name: string }[];
}
