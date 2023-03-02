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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInnerRangeMatch } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInnerRangeMatch';

export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner {
    /**
    * The value of the header should match exactly the content of exact_match.
    */
    'exactMatch'?: string;
    /**
    * The name of the HTTP header to match against.
    */
    'header'?: string;
    /**
    * If specified, the match result will be inverted before checking. Default value is set to false.
    */
    'invertMatch'?: boolean;
    /**
    * The value of the header must start with the contents of prefix_match.
    */
    'prefixMatch'?: string;
    /**
    * A header with header_name must exist. The match takes place whether or not the header has a value.
    */
    'presentMatch'?: boolean;
    'rangeMatch'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInnerRangeMatch;
    /**
    * The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax
    */
    'regexMatch'?: string;
    /**
    * The value of the header must end with the contents of suffix_match.
    */
    'suffixMatch'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exactMatch",
            "baseName": "exactMatch",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "invertMatch",
            "baseName": "invertMatch",
            "type": "boolean"
        },
        {
            "name": "prefixMatch",
            "baseName": "prefixMatch",
            "type": "string"
        },
        {
            "name": "presentMatch",
            "baseName": "presentMatch",
            "type": "boolean"
        },
        {
            "name": "rangeMatch",
            "baseName": "rangeMatch",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInnerRangeMatch"
        },
        {
            "name": "regexMatch",
            "baseName": "regexMatch",
            "type": "string"
        },
        {
            "name": "suffixMatch",
            "baseName": "suffixMatch",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner.attributeTypeMap;
    }
}
