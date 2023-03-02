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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionDestinationsInner } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionDestinationsInner';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionRetryPolicy } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionRetryPolicy';

/**
* Required. A detailed rule defining how to route traffic. This field is required.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerAction {
    /**
    * Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations.
    */
    'destinations'?: Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionDestinationsInner>;
    'faultInjectionPolicy'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy;
    'retryPolicy'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionRetryPolicy;
    /**
    * Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.
    */
    'timeout'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destinations",
            "baseName": "destinations",
            "type": "Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionDestinationsInner>"
        },
        {
            "name": "faultInjectionPolicy",
            "baseName": "faultInjectionPolicy",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy"
        },
        {
            "name": "retryPolicy",
            "baseName": "retryPolicy",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionRetryPolicy"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerAction.attributeTypeMap;
    }
}

