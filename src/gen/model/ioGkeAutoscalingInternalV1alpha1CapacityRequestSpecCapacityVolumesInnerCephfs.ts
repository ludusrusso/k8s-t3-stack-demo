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
import { IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfsSecretRef } from './ioGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfsSecretRef';

/**
* CephFS represents a Ceph FS mount on the host that shares a pod\'s lifetime
*/
export class IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs {
    /**
    * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
    */
    'monitors': Array<string>;
    /**
    * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
    */
    'path'?: string;
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
    */
    'readOnly'?: boolean;
    /**
    * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
    */
    'secretFile'?: string;
    'secretRef'?: IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfsSecretRef;
    /**
    * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
    */
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "monitors",
            "baseName": "monitors",
            "type": "Array<string>"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretFile",
            "baseName": "secretFile",
            "type": "string"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfsSecretRef"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeAutoscalingInternalV1alpha1CapacityRequestSpecCapacityVolumesInnerCephfs.attributeTypeMap;
    }
}
