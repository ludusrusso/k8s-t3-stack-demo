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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm } from './comGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecSecondaryWorkerConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecSecondaryWorkerConfig';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecWorkerConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecWorkerConfig';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpec {
    'basicAlgorithm': ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    'projectRef'?: ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'secondaryWorkerConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecSecondaryWorkerConfig;
    'workerConfig': ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecWorkerConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basicAlgorithm",
            "baseName": "basicAlgorithm",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecBasicAlgorithm"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "secondaryWorkerConfig",
            "baseName": "secondaryWorkerConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecSecondaryWorkerConfig"
        },
        {
            "name": "workerConfig",
            "baseName": "workerConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpecWorkerConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocAutoscalingPolicySpec.attributeTypeMap;
    }
}
