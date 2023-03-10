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
* Alphabetical set of rules to use for alphabetical ordering of the tags.
*/
export class IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical {
    /**
    * Order specifies the sorting order of the tags. Given the letters of the alphabet as tags, ascending order would select Z, and descending order would select A.
    */
    'order'?: IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical.OrderEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical.OrderEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical {
    export enum OrderEnum {
        Asc = <any> 'asc',
        Desc = <any> 'desc'
    }
}
