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
* The specification for rewrite URL before forwarding requests to the destination.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionUrlRewrite {
    /**
    * Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
    */
    'hostRewrite'?: string;
    /**
    * Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
    */
    'pathPrefixRewrite'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hostRewrite",
            "baseName": "hostRewrite",
            "type": "string"
        },
        {
            "name": "pathPrefixRewrite",
            "baseName": "pathPrefixRewrite",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionUrlRewrite.attributeTypeMap;
    }
}

