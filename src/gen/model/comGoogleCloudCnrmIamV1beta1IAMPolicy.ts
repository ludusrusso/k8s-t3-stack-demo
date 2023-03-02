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
import { ComGoogleCloudCnrmIamV1beta1IAMPolicySpec } from './comGoogleCloudCnrmIamV1beta1IAMPolicySpec';
import { ComGoogleCloudCnrmIamV1beta1IAMPolicyStatus } from './comGoogleCloudCnrmIamV1beta1IAMPolicyStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* IAMPolicy is the Schema for the iampolicies API
*/
export class ComGoogleCloudCnrmIamV1beta1IAMPolicy {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec'?: ComGoogleCloudCnrmIamV1beta1IAMPolicySpec;
    'status'?: ComGoogleCloudCnrmIamV1beta1IAMPolicyStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "ComGoogleCloudCnrmIamV1beta1IAMPolicySpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ComGoogleCloudCnrmIamV1beta1IAMPolicyStatus"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIamV1beta1IAMPolicy.attributeTypeMap;
    }
}

