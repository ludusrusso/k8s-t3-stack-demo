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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIOSecretRef } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIOSecretRef';

/**
* ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO {
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
    */
    'fsType'?: string;
    /**
    * The host address of the ScaleIO API Gateway.
    */
    'gateway': string;
    /**
    * The name of the ScaleIO Protection Domain for the configured storage.
    */
    'protectionDomain'?: string;
    /**
    * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef': ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIOSecretRef;
    /**
    * Flag to enable/disable SSL communication with Gateway, default false
    */
    'sslEnabled'?: boolean;
    /**
    * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
    */
    'storageMode'?: string;
    /**
    * The ScaleIO Storage Pool associated with the protection domain.
    */
    'storagePool'?: string;
    /**
    * The name of the storage system as configured in ScaleIO.
    */
    'system': string;
    /**
    * The name of a volume already created in the ScaleIO system that is associated with this volume source.
    */
    'volumeName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "gateway",
            "baseName": "gateway",
            "type": "string"
        },
        {
            "name": "protectionDomain",
            "baseName": "protectionDomain",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIOSecretRef"
        },
        {
            "name": "sslEnabled",
            "baseName": "sslEnabled",
            "type": "boolean"
        },
        {
            "name": "storageMode",
            "baseName": "storageMode",
            "type": "string"
        },
        {
            "name": "storagePool",
            "baseName": "storagePool",
            "type": "string"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "string"
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO.attributeTypeMap;
    }
}
