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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerBackendServiceRef } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerBackendServiceRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction';

export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInner {
    'backendServiceRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerBackendServiceRef;
    'headerAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction;
    /**
    * Specifies the fraction of traffic sent to backendService, computed as weight / (sum of all weightedBackendService weights in routeAction) .  The selection of a backend service is determined only for new traffic. Once a user\'s request has been directed to a backendService, subsequent requests will be sent to the same backendService as determined by the BackendService\'s session affinity policy.  The value must be between 0 and 1000.
    */
    'weight'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backendServiceRef",
            "baseName": "backendServiceRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerBackendServiceRef"
        },
        {
            "name": "headerAction",
            "baseName": "headerAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInner.attributeTypeMap;
    }
}
