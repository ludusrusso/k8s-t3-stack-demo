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
* The specification for injecting delay to client requests.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay {
    /**
    * Specify a fixed delay before forwarding the request.
    */
    'fixedDelay'?: string;
    /**
    * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
    */
    'percentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fixedDelay",
            "baseName": "fixedDelay",
            "type": "string"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesGRPCRouteSpecRulesInnerActionFaultInjectionPolicyDelay.attributeTypeMap;
    }
}

