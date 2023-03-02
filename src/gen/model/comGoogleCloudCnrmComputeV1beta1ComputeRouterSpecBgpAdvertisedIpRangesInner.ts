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

export class ComGoogleCloudCnrmComputeV1beta1ComputeRouterSpecBgpAdvertisedIpRangesInner {
    /**
    * User-specified description for the IP range.
    */
    'description'?: string;
    /**
    * The IP range to advertise. The value must be a CIDR-formatted string.
    */
    'range': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "range",
            "baseName": "range",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeRouterSpecBgpAdvertisedIpRangesInner.attributeTypeMap;
    }
}

