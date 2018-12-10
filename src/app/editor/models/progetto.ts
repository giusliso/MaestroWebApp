import { Scena } from "./scena";
import { User } from "./user";

export interface Progetto {
    scene: Scena[];
    name:string
    description?: string;
    team: string
    user: User
}