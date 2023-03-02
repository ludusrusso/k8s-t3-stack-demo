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
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical';
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyNumerical } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyNumerical';
import { IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicySemver } from './ioFluxcdToolkitImageV1alpha1ImagePolicySpecPolicySemver';

/**
* Policy gives the particulars of the policy to be followed in selecting the most recent image
*/
export class IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy {
    'alphabetical'?: IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical;
    'numerical'?: IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyNumerical;
    'semver'?: IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicySemver;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alphabetical",
            "baseName": "alphabetical",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyAlphabetical"
        },
        {
            "name": "numerical",
            "baseName": "numerical",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicyNumerical"
        },
        {
            "name": "semver",
            "baseName": "semver",
            "type": "IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicySemver"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImagePolicySpecPolicy.attributeTypeMap;
    }
}

