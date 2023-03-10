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
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfigSecretRef } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfigSecretRef';

/**
* KubeConfig for reconciling the HelmRelease on a remote cluster. When specified, KubeConfig takes precedence over ServiceAccountName.
*/
export class IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig {
    'secretRef'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfigSecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfigSecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitHelmV2beta1HelmReleaseSpecKubeConfig.attributeTypeMap;
    }
}

