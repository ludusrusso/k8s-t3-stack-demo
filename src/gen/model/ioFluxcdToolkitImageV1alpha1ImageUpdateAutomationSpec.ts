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
import { IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCheckout } from './ioFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCheckout';
import { IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommit } from './ioFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommit';
import { IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush } from './ioFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush';
import { IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecUpdate } from './ioFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecUpdate';

/**
* ImageUpdateAutomationSpec defines the desired state of ImageUpdateAutomation
*/
export class IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpec {
    'checkout': IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCheckout;
    'commit': IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommit;
    /**
    * Interval gives an lower bound for how often the automation run should be attempted.
    */
    'interval': string;
    'push'?: IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush;
    /**
    * Suspend tells the controller to not run this automation, until it is unset (or set to false). Defaults to false.
    */
    'suspend'?: boolean;
    'update'?: IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecUpdate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkout",
            "baseName": "checkout",
            "type": "IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCheckout"
        },
        {
            "name": "commit",
            "baseName": "commit",
            "type": "IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecCommit"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "push",
            "baseName": "push",
            "type": "IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecPush"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        },
        {
            "name": "update",
            "baseName": "update",
            "type": "IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpecUpdate"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitImageV1alpha1ImageUpdateAutomationSpec.attributeTypeMap;
    }
}
