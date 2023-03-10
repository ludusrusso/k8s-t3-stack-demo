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
* Threshold at which to begin ratelimiting.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeSecurityPolicySpecRuleInnerRateLimitOptionsRateLimitThreshold {
    /**
    * Number of HTTP(S) requests for calculating the threshold.
    */
    'count': number;
    /**
    * Interval over which the threshold is computed.
    */
    'intervalSec': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "intervalSec",
            "baseName": "intervalSec",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeSecurityPolicySpecRuleInnerRateLimitOptionsRateLimitThreshold.attributeTypeMap;
    }
}

