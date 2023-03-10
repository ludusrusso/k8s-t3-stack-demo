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
* The specification for allowing client side cross-origin requests. Please see W3C Recommendation for Cross Origin Resource Sharing.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteActionCorsPolicy {
    /**
    * In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access- Control-Allow-Credentials header. Defaults to false.
    */
    'allowCredentials'?: boolean;
    /**
    * Specifies the content for the Access-Control-Allow-Headers header.
    */
    'allowHeaders'?: Array<string>;
    /**
    * Specifies the content for the Access-Control-Allow-Methods header.
    */
    'allowMethods'?: Array<string>;
    /**
    * Specifies the regular expression patterns that match allowed origins. For regular expression grammar please see en.cppreference.com/w/cpp/regex/ecmascript An origin is allowed if it matches either allow_origins or allow_origin_regex.
    */
    'allowOriginRegexes'?: Array<string>;
    /**
    * Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either allow_origins or allow_origin_regex.
    */
    'allowOrigins'?: Array<string>;
    /**
    * If true, specifies the CORS policy is disabled.
    */
    'disabled': boolean;
    /**
    * Specifies the content for the Access-Control-Expose-Headers header.
    */
    'exposeHeaders'?: Array<string>;
    /**
    * Specifies how long the results of a preflight request can be cached. This translates to the content for the Access-Control-Max-Age header.
    */
    'maxAge'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowCredentials",
            "baseName": "allowCredentials",
            "type": "boolean"
        },
        {
            "name": "allowHeaders",
            "baseName": "allowHeaders",
            "type": "Array<string>"
        },
        {
            "name": "allowMethods",
            "baseName": "allowMethods",
            "type": "Array<string>"
        },
        {
            "name": "allowOriginRegexes",
            "baseName": "allowOriginRegexes",
            "type": "Array<string>"
        },
        {
            "name": "allowOrigins",
            "baseName": "allowOrigins",
            "type": "Array<string>"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "exposeHeaders",
            "baseName": "exposeHeaders",
            "type": "Array<string>"
        },
        {
            "name": "maxAge",
            "baseName": "maxAge",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteActionCorsPolicy.attributeTypeMap;
    }
}

