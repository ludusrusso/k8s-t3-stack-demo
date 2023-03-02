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

export class ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner {
    /**
    * Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Possible values: ACCESS_MODE_UNSPECIFIED, READ_ONLY, READ_WRITE
    */
    'accessMode'?: string;
    /**
    * An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
    */
    'anonGid'?: number;
    /**
    * An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings.
    */
    'anonUid'?: number;
    /**
    * List of either an IPv4 addresses in the format `{octet1}.{octet2}.{octet3}.{octet4}` or CIDR ranges in the format `{octet1}.{octet2}.{octet3}.{octet4}/{mask size}` which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
    */
    'ipRanges'?: Array<string>;
    /**
    * Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. Possible values: SQUASH_MODE_UNSPECIFIED, NO_ROOT_SQUASH, ROOT_SQUASH
    */
    'squashMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessMode",
            "baseName": "accessMode",
            "type": "string"
        },
        {
            "name": "anonGid",
            "baseName": "anonGid",
            "type": "number"
        },
        {
            "name": "anonUid",
            "baseName": "anonUid",
            "type": "number"
        },
        {
            "name": "ipRanges",
            "baseName": "ipRanges",
            "type": "Array<string>"
        },
        {
            "name": "squashMode",
            "baseName": "squashMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner.attributeTypeMap;
    }
}
