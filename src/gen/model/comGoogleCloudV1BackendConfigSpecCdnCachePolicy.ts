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
* CacheKeyPolicy contains configuration for how requests to a CDN-enabled backend are cached.
*/
export class ComGoogleCloudV1BackendConfigSpecCdnCachePolicy {
    /**
    * If true, requests to different hosts will be cached separately.
    */
    'includeHost'?: boolean;
    /**
    * If true, http and https requests will be cached separately.
    */
    'includeProtocol'?: boolean;
    /**
    * If true, query string parameters are included in the cache key according to QueryStringBlacklist and QueryStringWhitelist. If neither is set, the entire query string is included and if false the entire query string is excluded.
    */
    'includeQueryString'?: boolean;
    /**
    * Names of query strint parameters to exclude from cache keys. All other parameters are included. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both.
    */
    'queryStringBlacklist'?: Array<string>;
    /**
    * Names of query string parameters to include in cache keys. All other parameters are excluded. Either specify QueryStringBlacklist or QueryStringWhitelist, but not both.
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
        return ComGoogleCloudV1BackendConfigSpecCdnCachePolicy.attributeTypeMap;
    }
}

