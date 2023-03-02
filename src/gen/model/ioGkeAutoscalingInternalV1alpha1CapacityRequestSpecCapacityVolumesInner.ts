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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAwsElasticBlockStore } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAwsElasticBlockStore';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureDisk } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureDisk';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCinder } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCinder';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMap } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMap';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerGlusterfs } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerGlusterfs';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerIscsi } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerIscsi';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjected } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjected';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerQuobyte } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerQuobyte';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerRbd } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerRbd';
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerSecret } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerSecret';

/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInner {
    'awsElasticBlockStore'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAwsElasticBlockStore;
    'azureDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureDisk;
    'azureFile'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile;
    'cephfs'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs;
    'cinder'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCinder;
    'configMap'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMap;
    'downwardAPI'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI;
    'emptyDir'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir;
    'fc'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc;
    'flexVolume'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume;
    'flocker'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker;
    'gcePersistentDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk;
    'gitRepo'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo;
    'glusterfs'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerGlusterfs;
    'hostPath'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath;
    'iscsi'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerIscsi;
    /**
    * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'nfs'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs;
    'persistentVolumeClaim'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim;
    'photonPersistentDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk;
    'portworxVolume'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume;
    'projected'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjected;
    'quobyte'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerQuobyte;
    'rbd'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerRbd;
    'scaleIO'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO;
    'secret'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerSecret;
    'storageos'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos;
    'vsphereVolume'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "awsElasticBlockStore",
            "baseName": "awsElasticBlockStore",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAwsElasticBlockStore"
        },
        {
            "name": "azureDisk",
            "baseName": "azureDisk",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureDisk"
        },
        {
            "name": "azureFile",
            "baseName": "azureFile",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile"
        },
        {
            "name": "cephfs",
            "baseName": "cephfs",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs"
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCinder"
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerConfigMap"
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerDownwardAPI"
        },
        {
            "name": "emptyDir",
            "baseName": "emptyDir",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir"
        },
        {
            "name": "fc",
            "baseName": "fc",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc"
        },
        {
            "name": "flexVolume",
            "baseName": "flexVolume",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume"
        },
        {
            "name": "flocker",
            "baseName": "flocker",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker"
        },
        {
            "name": "gcePersistentDisk",
            "baseName": "gcePersistentDisk",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk"
        },
        {
            "name": "gitRepo",
            "baseName": "gitRepo",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo"
        },
        {
            "name": "glusterfs",
            "baseName": "glusterfs",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerGlusterfs"
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath"
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerIscsi"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nfs",
            "baseName": "nfs",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs"
        },
        {
            "name": "persistentVolumeClaim",
            "baseName": "persistentVolumeClaim",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim"
        },
        {
            "name": "photonPersistentDisk",
            "baseName": "photonPersistentDisk",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk"
        },
        {
            "name": "portworxVolume",
            "baseName": "portworxVolume",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume"
        },
        {
            "name": "projected",
            "baseName": "projected",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerProjected"
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerQuobyte"
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerRbd"
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerSecret"
        },
        {
            "name": "storageos",
            "baseName": "storageos",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos"
        },
        {
            "name": "vsphereVolume",
            "baseName": "vsphereVolume",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInner.attributeTypeMap;
    }
}
