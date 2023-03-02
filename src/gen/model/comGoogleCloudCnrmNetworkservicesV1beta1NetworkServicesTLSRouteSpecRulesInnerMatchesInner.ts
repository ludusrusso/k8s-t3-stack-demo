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

export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerMatchesInner {
    /**
    * Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: \"http/1.1\", \"h2\". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set.
    */
    'alpn'?: Array<string>;
    /**
    * Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com. Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set.
    */
    'sniHost'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alpn",
            "baseName": "alpn",
            "type": "Array<string>"
        },
        {
            "name": "sniHost",
            "baseName": "sniHost",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerMatchesInner.attributeTypeMap;
    }
}
