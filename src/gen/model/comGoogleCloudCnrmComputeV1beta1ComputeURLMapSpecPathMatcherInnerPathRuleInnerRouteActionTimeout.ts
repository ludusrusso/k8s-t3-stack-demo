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
* Specifies the timeout for the selected route. Timeout is computed from the time the request is has been fully processed (i.e. end-of-stream) up until the response has been completely processed. Timeout includes all retries. If not specified, the default value is 15 seconds.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteActionTimeout {
    /**
    * Span of time that\'s a fraction of a second at nanosecond resolution. Durations less than one second are represented with a 0 \'seconds\' field and a positive \'nanos\' field. Must be from 0 to 999,999,999 inclusive.
    */
    'nanos'?: number;
    /**
    * Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.
    */
    'seconds': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nanos",
            "baseName": "nanos",
            "type": "number"
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteActionTimeout.attributeTypeMap;
    }
}
