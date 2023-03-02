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
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
*/
export class IoK8sApiCoreV1QuobyteVolumeSource {
    /**
    * group to map volume access to Default is no group
    */
    'group'?: string;
    /**
    * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
    */
    'readOnly'?: boolean;
    /**
    * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
    */
    'registry': string;
    /**
    * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
    */
    'tenant'?: string;
    /**
    * user to map volume access to Defaults to serivceaccount user
    */
    'user'?: string;
    /**
    * volume is a string that references an already created Quobyte volume by name.
    */
    'volume': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "registry",
            "baseName": "registry",
            "type": "string"
        },
        {
            "name": "tenant",
            "baseName": "tenant",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "volume",
            "baseName": "volume",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1QuobyteVolumeSource.attributeTypeMap;
    }
}

