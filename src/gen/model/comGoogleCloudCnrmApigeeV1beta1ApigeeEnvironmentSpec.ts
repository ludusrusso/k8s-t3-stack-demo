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
import { ComGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpecApigeeOrganizationRef } from './comGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpecApigeeOrganizationRef';

export class ComGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpec {
    'apigeeOrganizationRef': ComGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpecApigeeOrganizationRef;
    /**
    * Optional. Description of the environment.
    */
    'description'?: string;
    /**
    * Optional. Display name for this environment.
    */
    'displayName'?: string;
    /**
    * Optional. Key-value pairs that may be used for customizing the environment.
    */
    'properties'?: { [key: string]: string; };
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apigeeOrganizationRef",
            "baseName": "apigeeOrganizationRef",
            "type": "ComGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpecApigeeOrganizationRef"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmApigeeV1beta1ApigeeEnvironmentSpec.attributeTypeMap;
    }
}

