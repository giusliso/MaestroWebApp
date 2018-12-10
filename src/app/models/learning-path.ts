import { Target } from './target';

export interface LearningPath {
	name: string;
	description?: string;
	targets: Target[],
    activationList: Set<Target>
}