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
* Hint hints at the purpose of the attestation authority.
*/
export class ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint {
    /**
    * Required. The human readable name of this attestation authority, for example \"qa\".
    */
    'humanReadableName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "humanReadableName",
            "baseName": "humanReadableName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint.attributeTypeMap;
    }
}
