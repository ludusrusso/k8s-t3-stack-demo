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
import { ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecInstanceRef } from './comGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecInstanceRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecNetworkRef } from './comGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecNetworkRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpec {
    /**
    * Immutable. An optional description of this resource.
    */
    'description'?: string;
    'instanceRef': ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecInstanceRef;
    /**
    * Immutable. NAT option controlling how IPs are NAT\'ed to the instance. Currently only NO_NAT (default value) is supported. Default value: \"NO_NAT\" Possible values: [\"NO_NAT\"].
    */
    'natPolicy'?: string;
    'networkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecNetworkRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. URL of the zone where the target instance resides.
    */
    'zone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "instanceRef",
            "baseName": "instanceRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecInstanceRef"
        },
        {
            "name": "natPolicy",
            "baseName": "natPolicy",
            "type": "string"
        },
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpecNetworkRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeTargetInstanceSpec.attributeTypeMap;
    }
}

