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
import { IoFluxcdToolkitSourceV1beta2HelmChartStatusArtifact } from './ioFluxcdToolkitSourceV1beta2HelmChartStatusArtifact';

/**
* HelmChartStatus records the observed state of the HelmChart.
*/
export class IoFluxcdToolkitSourceV1beta2HelmChartStatus {
    'artifact'?: IoFluxcdToolkitSourceV1beta2HelmChartStatusArtifact;
    /**
    * Conditions holds the conditions for the HelmChart.
    */
    'conditions'?: Array<IoFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner>;
    /**
    * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
    */
    'lastHandledReconcileAt'?: string;
    /**
    * ObservedChartName is the last observed chart name as specified by the resolved chart reference.
    */
    'observedChartName'?: string;
    /**
    * ObservedGeneration is the last observed generation of the HelmChart object.
    */
    'observedGeneration'?: number;
    /**
    * ObservedSourceArtifactRevision is the last observed Artifact.Revision of the HelmChartSpec.SourceRef.
    */
    'observedSourceArtifactRevision'?: string;
    /**
    * URL is the dynamic fetch link for the latest Artifact. It is provided on a \"best effort\" basis, and using the precise BucketStatus.Artifact data is recommended.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "artifact",
            "baseName": "artifact",
            "type": "IoFluxcdToolkitSourceV1beta2HelmChartStatusArtifact"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoFluxcdToolkitHelmV2beta1HelmReleaseStatusConditionsInner>"
        },
        {
            "name": "lastHandledReconcileAt",
            "baseName": "lastHandledReconcileAt",
            "type": "string"
        },
        {
            "name": "observedChartName",
            "baseName": "observedChartName",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "observedSourceArtifactRevision",
            "baseName": "observedSourceArtifactRevision",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta2HelmChartStatus.attributeTypeMap;
    }
}

