export interface Recipe {
    id: string;
    titre: string;
    temps_preparation: string;
    difficulte: number;
    image: string;
    ingredients: string[];
    preparation: string;
}