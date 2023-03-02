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

/**
* Required. Immutable. The fingerprint of the base image.
*/
export class ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint {
    /**
    * Required. The layer ID of the final layer in the Docker image\'s v1 representation.
    */
    'v1Name': string;
    /**
    * Required. The ordered list of v2 blobs that represent a given image.
    */
    'v2Blob': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "v1Name",
            "baseName": "v1Name",
            "type": "string"
        },
        {
            "name": "v2Blob",
            "baseName": "v2Blob",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint.attributeTypeMap;
    }
}

