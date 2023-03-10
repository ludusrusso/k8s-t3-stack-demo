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
import { IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKeySecretRef } from './ioFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKeySecretRef';

/**
* SigningKey provides the option to sign commits with a GPG key
*/
export class IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKey {
    'secretRef'?: IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKeySecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKeySecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommitSigningKey.attributeTypeMap;
    }
}

