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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerQueryParametersInner } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerQueryParametersInner';

export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInner {
    /**
    * The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used.
    */
    'fullPathMatch'?: string;
    /**
    * Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.
    */
    'headers'?: Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner>;
    /**
    * Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false.
    */
    'ignoreCase'?: boolean;
    /**
    * The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used.
    */
    'prefixMatch'?: string;
    /**
    * Specifies a list of query parameters to match against. ALL of the query parameters must be matched.
    */
    '_queryParameters'?: Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerQueryParametersInner>;
    /**
    * The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used.
    */
    'regexMatch'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fullPathMatch",
            "baseName": "fullPathMatch",
            "type": "string"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerHeadersInner>"
        },
        {
            "name": "ignoreCase",
            "baseName": "ignoreCase",
            "type": "boolean"
        },
        {
            "name": "prefixMatch",
            "baseName": "prefixMatch",
            "type": "string"
        },
        {
            "name": "_queryParameters",
            "baseName": "queryParameters",
            "type": "Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInnerQueryParametersInner>"
        },
        {
            "name": "regexMatch",
            "baseName": "regexMatch",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerMatchesInner.attributeTypeMap;
    }
}

