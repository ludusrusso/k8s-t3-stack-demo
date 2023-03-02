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
* SessionAffinityConfig contains configuration for stickyness parameters.
*/
export class ComGoogleCloudV1BackendConfigSpecSessionAffinity {
    'affinityCookieTtlSec'?: number;
    'affinityType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "affinityCookieTtlSec",
            "baseName": "affinityCookieTtlSec",
            "type": "number"
        },
        {
            "name": "affinityType",
            "baseName": "affinityType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudV1BackendConfigSpecSessionAffinity.attributeTypeMap;
    }
}
