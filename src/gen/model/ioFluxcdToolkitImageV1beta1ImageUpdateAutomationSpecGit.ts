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
import { IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommit } from './ioFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommit';
import { IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitPush } from './ioFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitPush';
import { IoFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGitCheckout } from './ioFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGitCheckout';

/**
* GitSpec contains all the git-specific definitions. This is technically optional, but in practice mandatory until there are other kinds of source allowed.
*/
export class IoFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGit {
    'checkout'?: IoFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGitCheckout;
    'commit': IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommit;
    'push'?: IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitPush;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkout",
            "baseName": "checkout",
            "type": "IoFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGitCheckout"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitCommit"
        },
        {
            "name": "push",
            "baseName": "push",
            "type": "IoFluxcdToolkitImageV1alpha2ImageUpdateAutomationSpecGitPush"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1beta1ImageUpdateAutomationSpecGit.attributeTypeMap;
    }
}

