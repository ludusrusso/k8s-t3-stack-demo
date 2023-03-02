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

export class ComGoogleCloudCnrmIapV1beta1IAPBrandSpec {
    /**
    * Immutable. Application name displayed on OAuth consent screen.
    */
    'applicationTitle'?: string;
    /**
    * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;
    /**
    * Immutable. Support email displayed on the OAuth consent screen.
    */
    'supportEmail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationTitle",
            "baseName": "applicationTitle",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "supportEmail",
            "baseName": "supportEmail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIapV1beta1IAPBrandSpec.attributeTypeMap;
    }
}
