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
import { ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint } from './comGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint';

/**
* A note describing a base image.
*/
export class ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImage {
    'fingerprint': ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint;
    /**
    * Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.
    */
    'resourceUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImageFingerprint"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecImage.attributeTypeMap;
    }
}

