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
* Push specifies how and where to push commits made by the automation. If missing, commits are pushed (back) to `.spec.checkout.branch`.
*/
export class IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush {
    /**
    * Branch specifies that commits should be pushed to the branch named. The branch is created using `.spec.checkout.branch` as the starting point, if it doesn\'t already exist.
    */
    'branch': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush.attributeTypeMap;
    }
}

