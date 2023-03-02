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
* The CacheKeyPolicy for this CdnPolicy.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecCdnPolicyCacheKeyPolicy {
    /**
    * If true requests to different hosts will be cached separately.
    */
    'includeHost'?: boolean;
    /**
    * If true, http and https requests will be cached separately.
    */
    'includeProtocol'?: boolean;
    /**
    * If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. If neither is set, the entire query string will be included.  If false, the query string will be excluded from the cache key entirely.
    */
    'includeQueryString'?: boolean;
    /**
    * Names of query string parameters to exclude in cache keys.  All other parameters will be included. Either specify query_string_whitelist or query_string_blacklist, not both. \'&\' and \'=\' will be percent encoded and not treated as delimiters.
    */
    'queryStringBlacklist'?: Array<string>;
    /**
    * Names of query string parameters to include in cache keys.  All other parameters will be excluded. Either specify query_string_whitelist or query_string_blacklist, not both. \'&\' and \'=\' will be percent encoded and not treated as delimiters.
    */
    'queryStringWhitelist'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "includeHost",
            "baseName": "includeHost",
            "type": "boolean"
        },
        {
            "name": "includeProtocol",
            "baseName": "includeProtocol",
            "type": "boolean"
        },
        {
            "name": "includeQueryString",
            "baseName": "includeQueryString",
            "type": "boolean"
        },
        {
            "name": "queryStringBlacklist",
            "baseName": "queryStringBlacklist",
            "type": "Array<string>"
        },
        {
            "name": "queryStringWhitelist",
            "baseName": "queryStringWhitelist",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecCdnPolicyCacheKeyPolicy.attributeTypeMap;
    }
}

