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
* The linear bucket.
*/
export class ComGoogleCloudCnrmLoggingV1beta1LoggingLogMetricSpecBucketOptionsLinearBuckets {
    /**
    * Must be greater than 0.
    */
    'numFiniteBuckets'?: number;
    /**
    * Lower bound of the first bucket.
    */
    'offset'?: number;
    /**
    * Must be greater than 0.
    */
    'width'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numFiniteBuckets",
            "baseName": "numFiniteBuckets",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmLoggingV1beta1LoggingLogMetricSpecBucketOptionsLinearBuckets.attributeTypeMap;
    }
}

