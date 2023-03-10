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
* An 128-bit global unique ID of the PSC service attachment.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeServiceAttachmentStatusPscServiceAttachmentId {
    'high'?: number;
    'low'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "high",
            "baseName": "high",
            "type": "number"
        },
        {
            "name": "low",
            "baseName": "low",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeServiceAttachmentStatusPscServiceAttachmentId.attributeTypeMap;
    }
}

