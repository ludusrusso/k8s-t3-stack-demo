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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyAbort } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyAbort';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay';

/**
* Optional. The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy {
    'abort'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyAbort;
    'delay'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "abort",
            "baseName": "abort",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyAbort"
        },
        {
            "name": "delay",
            "baseName": "delay",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicy.attributeTypeMap;
    }
}

