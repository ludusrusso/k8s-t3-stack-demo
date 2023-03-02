/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.24.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ComGoogleCloudCnrmDataflowV1beta1DataflowFlexTemplateJobSpec {
    'containerSpecGcsPath': string;
    'parameters'?: object;
    /**
    * Immutable. The region in which the created job should run.
    */
    'region'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerSpecGcsPath",
            "baseName": "containerSpecGcsPath",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "object"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataflowV1beta1DataflowFlexTemplateJobSpec.attributeTypeMap;
    }
}

