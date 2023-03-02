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
* Reference of the source where the kustomization file is.
*/
export class IoFluxcdToolkitKustomizeV1beta1KustomizationSpecSourceRef {
    /**
    * API version of the referent
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent
    */
    'kind': IoFluxcdToolkitKustomizeV1beta1KustomizationSpecSourceRef.KindEnum;
    /**
    * Name of the referent
    */
    'name': string;
    /**
    * Namespace of the referent, defaults to the Kustomization namespace
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "IoFluxcdToolkitKustomizeV1beta1KustomizationSpecSourceRef.KindEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitKustomizeV1beta1KustomizationSpecSourceRef.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitKustomizeV1beta1KustomizationSpecSourceRef {
    export enum KindEnum {
        GitRepository = <any> 'GitRepository',
        Bucket = <any> 'Bucket'
    }
}
