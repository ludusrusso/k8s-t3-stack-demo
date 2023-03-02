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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigEndpointConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigEndpointConfig';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigLifecycleConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigLifecycleConfig';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfig {
    'endpointConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigEndpointConfig;
    'lifecycleConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigLifecycleConfig;
    'masterConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig;
    'secondaryWorkerConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig;
    'workerConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "endpointConfig",
            "baseName": "endpointConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigEndpointConfig"
        },
        {
            "name": "lifecycleConfig",
            "baseName": "lifecycleConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigLifecycleConfig"
        },
        {
            "name": "masterConfig",
            "baseName": "masterConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig"
        },
        {
            "name": "secondaryWorkerConfig",
            "baseName": "secondaryWorkerConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig"
        },
        {
            "name": "workerConfig",
            "baseName": "workerConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfigMasterConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusConfig.attributeTypeMap;
    }
}
