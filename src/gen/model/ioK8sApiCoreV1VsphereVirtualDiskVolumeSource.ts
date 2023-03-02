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
* Represents a vSphere volume resource.
*/
export class IoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
    /**
    * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
    */
    'storagePolicyID'?: string;
    /**
    * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
    */
    'storagePolicyName'?: string;
    /**
    * volumePath is the path that identifies vSphere volume vmdk
    */
    'volumePath': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "storagePolicyID",
            "baseName": "storagePolicyID",
            "type": "string"
        },
        {
            "name": "storagePolicyName",
            "baseName": "storagePolicyName",
            "type": "string"
        },
        {
            "name": "volumePath",
            "baseName": "volumePath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.attributeTypeMap;
    }
}

