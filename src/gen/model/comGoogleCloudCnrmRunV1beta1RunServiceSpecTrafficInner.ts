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

export class ComGoogleCloudCnrmRunV1beta1RunServiceSpecTrafficInner {
    /**
    * Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. Cloud Run currently requires 100 percent for a single TrafficTarget entry.
    */
    'percent'?: number;
    /**
    * Revision to which to send this portion of traffic, if traffic allocation is by revision.
    */
    'revision'?: string;
    /**
    * Indicates a string to be part of the URI to exclusively reference this target.
    */
    'tag'?: string;
    /**
    * The allocation type for this traffic target. Possible values: TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED, TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST, TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceSpecTrafficInner.attributeTypeMap;
    }
}
