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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner';

/**
* Specifies changes to request and response headers that need to take effect for the selected backendService.  headerAction specified here take effect before headerAction in the enclosing HttpRouteRule, PathMatcher and UrlMap.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction {
    /**
    * Headers to add to a matching request prior to forwarding the request to the backendService.
    */
    'requestHeadersToAdd'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner>;
    /**
    * A list of header names for headers that need to be removed from the request prior to forwarding the request to the backendService.
    */
    'requestHeadersToRemove'?: Array<string>;
    /**
    * Headers to add the response prior to sending the response back to the client.
    */
    'responseHeadersToAdd'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner>;
    /**
    * A list of header names for headers that need to be removed from the response prior to sending the response back to the client.
    */
    'responseHeadersToRemove'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestHeadersToAdd",
            "baseName": "requestHeadersToAdd",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner>"
        },
        {
            "name": "requestHeadersToRemove",
            "baseName": "requestHeadersToRemove",
            "type": "Array<string>"
        },
        {
            "name": "responseHeadersToAdd",
            "baseName": "responseHeadersToAdd",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderActionRequestHeadersToAddInner>"
        },
        {
            "name": "responseHeadersToRemove",
            "baseName": "responseHeadersToRemove",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionWeightedBackendServicesInnerHeaderAction.attributeTypeMap;
    }
}

