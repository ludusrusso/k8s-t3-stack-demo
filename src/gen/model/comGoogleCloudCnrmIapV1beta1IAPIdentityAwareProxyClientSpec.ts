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
import { ComGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpecBrandRef } from './comGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpecBrandRef';

export class ComGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpec {
    'brandRef': ComGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpecBrandRef;
    /**
    * Immutable. Human-friendly name given to the OAuth client.
    */
    'displayName'?: string;
    /**
    * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brandRef",
            "baseName": "brandRef",
            "type": "ComGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpecBrandRef"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIapV1beta1IAPIdentityAwareProxyClientSpec.attributeTypeMap;
    }
}
