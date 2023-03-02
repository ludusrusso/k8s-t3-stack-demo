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
* SeccompProfile defines a pod/container\'s seccomp profile settings. Only one profile source may be set.
*/
export class IoK8sApiCoreV1SeccompProfile {
    /**
    * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must only be set if type is \"Localhost\".
    */
    'localhostProfile'?: string;
    /**
    * type indicates which kind of seccomp profile will be applied. Valid options are:  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.  Possible enum values:  - `\"Localhost\"` indicates a profile defined in a file on the node should be used. The file\'s location relative to <kubelet-root-dir>/seccomp.  - `\"RuntimeDefault\"` represents the default container runtime seccomp profile.  - `\"Unconfined\"` indicates no seccomp profile is applied (A.K.A. unconfined).
    */
    'type': IoK8sApiCoreV1SeccompProfile.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "localhostProfile",
            "baseName": "localhostProfile",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IoK8sApiCoreV1SeccompProfile.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1SeccompProfile.attributeTypeMap;
    }
}

export namespace IoK8sApiCoreV1SeccompProfile {
    export enum TypeEnum {
        Localhost = <any> 'Localhost',
        RuntimeDefault = <any> 'RuntimeDefault',
        Unconfined = <any> 'Unconfined'
    }
}
