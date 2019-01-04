/**
 * MaestroHost - SceneService
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Content } from './content';
import { LearningPath } from './learningPath';
import { Scenario } from './scenario';
import { Target } from './target';

export interface Scene {
  sceneId?: number;
  name?: string;
  description?: string;
  projectId?: number;
  landmark?: any;
  createdAtUTC?: Date;
  numberOfDownloads?: number;
  inUse?: boolean;
  version?: number;
  scenarios?: Array<Scenario>;
  learningPaths?: Array<LearningPath>;
  targets?: Array<Target>;
  contents?: Array<Content>;
  files?: Array<any>;
}
