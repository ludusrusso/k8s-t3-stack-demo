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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionDestinationsInnerServiceRef } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionDestinationsInnerServiceRef';

/**
* The destination the requests will be mirrored to. The weight of the destination will be ignored.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination {
    'serviceRef'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionDestinationsInnerServiceRef;
    /**
    * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
    */
    'weight'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "serviceRef",
            "baseName": "serviceRef",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionDestinationsInnerServiceRef"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination.attributeTypeMap;
    }
}

