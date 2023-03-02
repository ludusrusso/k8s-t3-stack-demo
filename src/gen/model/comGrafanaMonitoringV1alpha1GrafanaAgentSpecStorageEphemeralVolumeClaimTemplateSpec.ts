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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSource } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSource';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSourceRef } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSourceRef';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecResources } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecResources';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecSelector } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecSelector';

/**
* The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpec {
    /**
    * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    'dataSource'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSource;
    'dataSourceRef'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSourceRef;
    'resources'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecResources;
    'selector'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecSelector;
    /**
    * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
    */
    'storageClassName'?: string;
    /**
    * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
    */
    'volumeMode'?: string;
    /**
    * VolumeName is the binding reference to the PersistentVolume backing this claim.
    */
    'volumeName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>"
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSource"
        },
        {
            "name": "dataSourceRef",
            "baseName": "dataSourceRef",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecDataSourceRef"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecResources"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpecSelector"
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string"
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string"
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecStorageEphemeralVolumeClaimTemplateSpec.attributeTypeMap;
    }
}

