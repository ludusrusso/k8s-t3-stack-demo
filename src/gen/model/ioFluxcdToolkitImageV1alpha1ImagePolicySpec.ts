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
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags';
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecImageRepositoryRef } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecImageRepositoryRef';
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy';

/**
* ImagePolicySpec defines the parameters for calculating the ImagePolicy
*/
export class IoFluxcdToolkitImageV1alpha1ImagePolicySpec {
    'filterTags'?: IoFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags;
    'imageRepositoryRef': IoFluxcdToolkitImageV1alpha1ImagePolicySpecImageRepositoryRef;
    'policy': IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filterTags",
            "baseName": "filterTags",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecFilterTags"
        },
        {
            "name": "imageRepositoryRef",
            "baseName": "imageRepositoryRef",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecImageRepositoryRef"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImagePolicySpec.attributeTypeMap;
    }
}
