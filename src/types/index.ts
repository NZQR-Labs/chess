export interface ResponseType<Type> {
    error: boolean; 
    success: boolean; 
    message: string; 
    data: Type; 
}

export interface Puzzle {
    puzzleid: string;
    fen: string;
    rating: number;
    ratingdeviation: number;
    moves: string[];
    themes: string[];
}

export interface ChessPuzzlesApiResponse {
    puzzles: Puzzle[];
}