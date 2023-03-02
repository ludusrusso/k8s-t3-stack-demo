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

export class ComGoogleCloudCnrmGkehubV1beta1GKEHubMembershipStatusAuthority {
    /**
    * Output only. An identity provider that reflects the `issuer` in the workload identity pool.
    */
    'identityProvider'?: string;
    /**
    * Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in: {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API.
    */
    'workloadIdentityPool'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identityProvider",
            "baseName": "identityProvider",
            "type": "string"
        },
        {
            "name": "workloadIdentityPool",
            "baseName": "workloadIdentityPool",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmGkehubV1beta1GKEHubMembershipStatusAuthority.attributeTypeMap;
    }
}

