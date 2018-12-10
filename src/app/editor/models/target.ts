import { TargetContent} from './target-content'
export interface Target {
	name: string;
	description?: string;
	position: {
        x:number,
        y:number
    },
    appearence: TargetContent
}