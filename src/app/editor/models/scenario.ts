import { LearningPath } from "./learning-path";


export interface Scenario {
    learningParhs: LearningPath[];
    name:string
	description?: string;
}