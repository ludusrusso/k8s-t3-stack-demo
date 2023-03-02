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
import { IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInnerTarget } from './ioFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInnerTarget';

/**
* Patch contains an inline StrategicMerge or JSON6902 patch, and the target the patch should be applied to.
*/
export class IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInner {
    /**
    * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with an array of operation objects.
    */
    'patch'?: string;
    'target'?: IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInnerTarget;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "patch",
            "baseName": "patch",
            "type": "string"
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInnerTarget"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitHelmV2beta1HelmReleaseSpecPostRenderersInnerKustomizePatchesInner.attributeTypeMap;
    }
}

