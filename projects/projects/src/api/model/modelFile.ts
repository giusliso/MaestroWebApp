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
import { Scene } from './scene';


export interface ModelFile { 
    fileId?: number;
    sceneId?: number;
    name?: string;
    description?: string;
    extension?: string;
    fileContent?: string;
    size?: number;
    scene?: Scene;
    content?: Content;
    isLandmark?: boolean;
    createdAtUTC?: Date;
}
