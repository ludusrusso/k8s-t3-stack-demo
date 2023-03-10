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
* Immutable. Optional. Disk option config settings.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigMasterConfigDiskConfig {
    /**
    * Immutable. Optional. Size in GB of the boot disk (default is 500GB).
    */
    'bootDiskSizeGb'?: number;
    /**
    * Immutable. Optional. Type of the boot disk (default is \"pd-standard\"). Valid values: \"pd-balanced\" (Persistent Disk Balanced Solid State Drive), \"pd-ssd\" (Persistent Disk Solid State Drive), or \"pd-standard\" (Persistent Disk Hard Disk Drive). See [Disk types](https://cloud.google.com/compute/docs/disks#disk-types).
    */
    'bootDiskType'?: string;
    /**
    * Immutable. Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
    */
    'numLocalSsds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bootDiskSizeGb",
            "baseName": "bootDiskSizeGb",
            "type": "number"
        },
        {
            "name": "bootDiskType",
            "baseName": "bootDiskType",
            "type": "string"
        },
        {
            "name": "numLocalSsds",
            "baseName": "numLocalSsds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigMasterConfigDiskConfig.attributeTypeMap;
    }
}

