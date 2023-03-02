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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCephfs } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCephfs';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCinder } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCinder';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMap } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMap';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCsi } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCsi';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPI } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPI';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEphemeral } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEphemeral';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGlusterfs } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGlusterfs';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerIscsi } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerIscsi';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjected } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjected';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerQuobyte } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerQuobyte';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerRbd } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerRbd';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerStorageos';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerVsphereVolume';

/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInner {
    'awsElasticBlockStore'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAwsElasticBlockStore;
    'azureDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureDisk;
    'azureFile'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile;
    'cephfs'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCephfs;
    'cinder'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCinder;
    'configMap'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMap;
    'csi'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCsi;
    'downwardAPI'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPI;
    'emptyDir'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir;
    'ephemeral'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEphemeral;
    'fc'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFc;
    'flexVolume'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlexVolume;
    'flocker'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerFlocker;
    'gcePersistentDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGcePersistentDisk;
    'gitRepo'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGitRepo;
    'glusterfs'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGlusterfs;
    'hostPath'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath;
    'iscsi'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerIscsi;
    /**
    * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name': string;
    'nfs'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerNfs;
    'persistentVolumeClaim'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPersistentVolumeClaim;
    'photonPersistentDisk'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPhotonPersistentDisk;
    'portworxVolume'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerPortworxVolume;
    'projected'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjected;
    'quobyte'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerQuobyte;
    'rbd'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerRbd;
    'scaleIO'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO;
    'secret'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret;
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
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCephfs"
        },
        {
            "name": "cinder",
            "baseName": "cinder",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCinder"
        },
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMap"
        },
        {
            "name": "csi",
            "baseName": "csi",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerCsi"
        },
        {
            "name": "downwardAPI",
            "baseName": "downwardAPI",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPI"
        },
        {
            "name": "emptyDir",
            "baseName": "emptyDir",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEmptyDir"
        },
        {
            "name": "ephemeral",
            "baseName": "ephemeral",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerEphemeral"
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
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerGlusterfs"
        },
        {
            "name": "hostPath",
            "baseName": "hostPath",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerHostPath"
        },
        {
            "name": "iscsi",
            "baseName": "iscsi",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerIscsi"
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
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjected"
        },
        {
            "name": "quobyte",
            "baseName": "quobyte",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerQuobyte"
        },
        {
            "name": "rbd",
            "baseName": "rbd",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerRbd"
        },
        {
            "name": "scaleIO",
            "baseName": "scaleIO",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerScaleIO"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret"
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
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInner.attributeTypeMap;
    }
}

