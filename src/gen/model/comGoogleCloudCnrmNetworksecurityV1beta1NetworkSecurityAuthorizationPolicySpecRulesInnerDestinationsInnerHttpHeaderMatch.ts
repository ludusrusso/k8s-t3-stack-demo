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
* Optional. Match against key:value pair in http header. Provides a flexible match based on HTTP headers, for potentially advanced use cases.
*/
export class ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityAuthorizationPolicySpecRulesInnerDestinationsInnerHttpHeaderMatch {
    /**
    * Required. The name of the HTTP header to match. For matching against the HTTP request\'s authority, use a headerMatch with the header name \":authority\". For matching a request\'s method, use the headerName \":method\".
    */
    'headerName': string;
    /**
    * Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header\'s port specifier.
    */
    'regexMatch': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "headerName",
            "baseName": "headerName",
            "type": "string"
        },
        {
            "name": "regexMatch",
            "baseName": "regexMatch",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityAuthorizationPolicySpecRulesInnerDestinationsInnerHttpHeaderMatch.attributeTypeMap;
    }
}
