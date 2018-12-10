import { Scenario } from "./scenario";

export interface Scena {
    scenarios: Scenario[];
    name:string
	description?: string;
}