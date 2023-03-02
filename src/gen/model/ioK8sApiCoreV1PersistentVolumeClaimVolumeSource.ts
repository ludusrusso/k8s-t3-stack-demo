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

/**
* PersistentVolumeClaimVolumeSource references the user\'s PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
*/
export class IoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
    /**
    * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
    */
    'claimName': string;
    /**
    * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
    */
    'readOnly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "claimName",
            "baseName": "claimName",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.attributeTypeMap;
    }
}

