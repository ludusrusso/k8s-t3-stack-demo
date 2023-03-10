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
import { IoFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner } from './ioFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner';
import { IoFluxcdToolkitKustomizeV1beta2KustomizationStatusInventory } from './ioFluxcdToolkitKustomizeV1beta2KustomizationStatusInventory';

/**
* KustomizationStatus defines the observed state of a kustomization.
*/
export class IoFluxcdToolkitKustomizeV1beta2KustomizationStatus {
    'conditions'?: Array<IoFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner>;
    'inventory'?: IoFluxcdToolkitKustomizeV1beta2KustomizationStatusInventory;
    /**
    * The last successfully applied revision. The revision format for Git sources is <branch|tag>/<commit-sha>.
    */
    'lastAppliedRevision'?: string;
    /**
    * LastAttemptedRevision is the revision of the last reconciliation attempt.
    */
    'lastAttemptedRevision'?: string;
    /**
    * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
    */
    'lastHandledReconcileAt'?: string;
    /**
    * ObservedGeneration is the last reconciled generation.
    */
    'observedGeneration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner>"
        },
        {
            "name": "inventory",
            "baseName": "inventory",
            "type": "IoFluxcdToolkitKustomizeV1beta2KustomizationStatusInventory"
        },
        {
            "name": "lastAppliedRevision",
            "baseName": "lastAppliedRevision",
            "type": "string"
        },
        {
            "name": "lastAttemptedRevision",
            "baseName": "lastAttemptedRevision",
            "type": "string"
        },
        {
            "name": "lastHandledReconcileAt",
            "baseName": "lastHandledReconcileAt",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitKustomizeV1beta2KustomizationStatus.attributeTypeMap;
    }
}

