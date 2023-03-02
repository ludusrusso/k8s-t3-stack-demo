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
* Uninstall holds the configuration for Helm uninstall actions for this HelmRelease.
*/
export class IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall {
    /**
    * DisableHooks prevents hooks from running during the Helm rollback action.
    */
    'disableHooks'?: boolean;
    /**
    * DisableWait disables waiting for all the resources to be deleted after a Helm uninstall is performed.
    */
    'disableWait'?: boolean;
    /**
    * KeepHistory tells Helm to remove all associated resources and mark the release as deleted, but retain the release history.
    */
    'keepHistory'?: boolean;
    /**
    * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm uninstall action. Defaults to \'HelmReleaseSpec.Timeout\'.
    */
    'timeout'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "disableHooks",
            "baseName": "disableHooks",
            "type": "boolean"
        },
        {
            "name": "disableWait",
            "baseName": "disableWait",
            "type": "boolean"
        },
        {
            "name": "keepHistory",
            "baseName": "keepHistory",
            "type": "boolean"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitHelmV2beta1HelmReleaseSpecUninstall.attributeTypeMap;
    }
}

