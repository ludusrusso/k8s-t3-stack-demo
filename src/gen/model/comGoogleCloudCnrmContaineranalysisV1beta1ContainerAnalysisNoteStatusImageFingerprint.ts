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

export class ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteStatusImageFingerprint {
    /**
    * Output only. The name of the image\'s v2 blobs computed via: ) Only the name of the final blob is kept.
    */
    'v2Name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "v2Name",
            "baseName": "v2Name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteStatusImageFingerprint.attributeTypeMap;
    }
}

