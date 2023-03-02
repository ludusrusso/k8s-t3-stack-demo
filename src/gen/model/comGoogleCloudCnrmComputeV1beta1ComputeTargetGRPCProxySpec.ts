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
import { ComGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpecUrlMapRef } from './comGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpecUrlMapRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpec {
    /**
    * An optional description of this resource.
    */
    'description'?: string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'urlMapRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpecUrlMapRef;
    /**
    * Immutable. If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. This will enable configuration checks on urlMap and its referenced BackendServices to not allow unsupported features. A gRPC application must use \"xds:///\" scheme in the target URI of the service it is connecting to. If false, indicates that the BackendServices referenced by the urlMap will be accessed by gRPC applications via a sidecar proxy. In this case, a gRPC application must not use \"xds:///\" scheme in the target URI of the service it is connecting to.
    */
    'validateForProxyless'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "urlMapRef",
            "baseName": "urlMapRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpecUrlMapRef"
        },
        {
            "name": "validateForProxyless",
            "baseName": "validateForProxyless",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeTargetGRPCProxySpec.attributeTypeMap;
    }
}
