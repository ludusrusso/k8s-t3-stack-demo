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

export class ComGoogleCloudCnrmBigtableV1beta1BigtableGCPolicySpecMaxVersionInner {
    /**
    * Immutable. Number of version before applying the GC policy.
    */
    'number': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigtableV1beta1BigtableGCPolicySpecMaxVersionInner.attributeTypeMap;
    }
}

