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
* The header value must be an integer and its value must be in the range specified in rangeMatch. If the header does not contain an integer, number or is empty, the match fails. For example for a range [-5, 0]  * -3 will match * 0 will not match * 0.25 will not match * -3someString will not match.  Only one of exactMatch, prefixMatch, suffixMatch, regexMatch, presentMatch or rangeMatch must be set.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInnerHeaderMatchesInnerRangeMatch {
    /**
    * The end of the range (exclusive).
    */
    'rangeEnd': number;
    /**
    * The start of the range (inclusive).
    */
    'rangeStart': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rangeEnd",
            "baseName": "rangeEnd",
            "type": "number"
        },
        {
            "name": "rangeStart",
            "baseName": "rangeStart",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInnerHeaderMatchesInnerRangeMatch.attributeTypeMap;
    }
}

