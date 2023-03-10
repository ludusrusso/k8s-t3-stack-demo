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
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecChart } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecChart';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecDependsOnInner } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecDependsOnInner';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecInstall } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecInstall';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInner } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInner';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecRollback } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecRollback';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecTest } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecTest';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUpgrade } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecUpgrade';
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecValuesFromInner } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecValuesFromInner';

/**
* HelmReleaseSpec defines the desired state of a Helm release.
*/
export class IoFluxcdToolkitHelmV2beta1HelmReleaseSpec {
    'chart': IoFluxcdToolkitHelmV2beta1HelmReleaseSpecChart;
    /**
    * DependsOn may contain a meta.NamespacedObjectReference slice with references to HelmRelease resources that must be ready before this HelmRelease can be reconciled.
    */
    'dependsOn'?: Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecDependsOnInner>;
    'install'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecInstall;
    /**
    * Interval at which to reconcile the Helm release.
    */
    'interval': string;
    'kubeConfig'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig;
    /**
    * MaxHistory is the number of revisions saved by Helm for this HelmRelease. Use \'0\' for an unlimited number of revisions; defaults to \'10\'.
    */
    'maxHistory'?: number;
    /**
    * PostRenderers holds an array of Helm PostRenderers, which will be applied in order of their definition.
    */
    'postRenderers'?: Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInner>;
    /**
    * ReleaseName used for the Helm release. Defaults to a composition of \'[TargetNamespace-]Name\'.
    */
    'releaseName'?: string;
    'rollback'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecRollback;
    /**
    * The name of the Kubernetes service account to impersonate when reconciling this HelmRelease.
    */
    'serviceAccountName'?: string;
    /**
    * StorageNamespace used for the Helm storage. Defaults to the namespace of the HelmRelease.
    */
    'storageNamespace'?: string;
    /**
    * Suspend tells the controller to suspend reconciliation for this HelmRelease, it does not apply to already started reconciliations. Defaults to false.
    */
    'suspend'?: boolean;
    /**
    * TargetNamespace to target when performing operations for the HelmRelease. Defaults to the namespace of the HelmRelease.
    */
    'targetNamespace'?: string;
    'test'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecTest;
    /**
    * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm action. Defaults to \'5m0s\'.
    */
    'timeout'?: string;
    'uninstall'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall;
    'upgrade'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUpgrade;
    /**
    * Values holds the values for this Helm release.
    */
    'values'?: object;
    /**
    * ValuesFrom holds references to resources containing Helm values for this HelmRelease, and information about how they should be merged.
    */
    'valuesFrom'?: Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecValuesFromInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chart",
            "baseName": "chart",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecChart"
        },
        {
            "name": "dependsOn",
            "baseName": "dependsOn",
            "type": "Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecDependsOnInner>"
        },
        {
            "name": "install",
            "baseName": "install",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecInstall"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "kubeConfig",
            "baseName": "kubeConfig",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig"
        },
        {
            "name": "maxHistory",
            "baseName": "maxHistory",
            "type": "number"
        },
        {
            "name": "postRenderers",
            "baseName": "postRenderers",
            "type": "Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInner>"
        },
        {
            "name": "releaseName",
            "baseName": "releaseName",
            "type": "string"
        },
        {
            "name": "rollback",
            "baseName": "rollback",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecRollback"
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string"
        },
        {
            "name": "storageNamespace",
            "baseName": "storageNamespace",
            "type": "string"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        },
        {
            "name": "targetNamespace",
            "baseName": "targetNamespace",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecTest"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        },
        {
            "name": "uninstall",
            "baseName": "uninstall",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall"
        },
        {
            "name": "upgrade",
            "baseName": "upgrade",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUpgrade"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "object"
        },
        {
            "name": "valuesFrom",
            "baseName": "valuesFrom",
            "type": "Array<IoFluxcdToolkitHelmV2beta1HelmReleaseSpecValuesFromInner>"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitHelmV2beta1HelmReleaseSpec.attributeTypeMap;
    }
}

