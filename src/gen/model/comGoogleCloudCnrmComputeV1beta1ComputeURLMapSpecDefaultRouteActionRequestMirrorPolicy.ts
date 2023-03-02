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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicyBackendServiceRef } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicyBackendServiceRef';

/**
* Specifies the policy on how requests intended for the route\'s backends are shadowed to a separate mirrored backend service. Loadbalancer does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host / authority header is suffixed with -shadow.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicy {
    'backendServiceRef': ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicyBackendServiceRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backendServiceRef",
            "baseName": "backendServiceRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicyBackendServiceRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRequestMirrorPolicy.attributeTypeMap;
    }
}
