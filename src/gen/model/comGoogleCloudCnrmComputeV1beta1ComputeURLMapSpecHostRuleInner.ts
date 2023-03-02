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

export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner {
    /**
    * An optional description of this HostRule. Provide this property when you create the resource.
    */
    'description'?: string;
    /**
    * The list of host patterns to match. They must be valid hostnames, except * will match any string of ([a-z0-9-.]*). In that case, * must be the first character and must be followed in the pattern by either - or ..
    */
    'hosts': Array<string>;
    /**
    * The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL\'s host portion.
    */
    'pathMatcher': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "hosts",
            "baseName": "hosts",
            "type": "Array<string>"
        },
        {
            "name": "pathMatcher",
            "baseName": "pathMatcher",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner.attributeTypeMap;
    }
}

