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
import { ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint } from './comGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint';

/**
* A note describing an attestation role.
*/
export class ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestation {
    'hint'?: ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hint",
            "baseName": "hint",
            "type": "ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestationHint"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContaineranalysisV1beta1ContainerAnalysisNoteSpecAttestation.attributeTypeMap;
    }
}

