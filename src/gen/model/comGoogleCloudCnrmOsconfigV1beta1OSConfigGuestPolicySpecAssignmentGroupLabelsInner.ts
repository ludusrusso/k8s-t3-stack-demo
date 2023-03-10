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

export class ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner {
    /**
    * Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
    */
    'labels'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmOsconfigV1beta1OSConfigGuestPolicySpecAssignmentGroupLabelsInner.attributeTypeMap;
    }
}

