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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination';

/**
* Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicy {
    'destination'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicyDestination"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesHTTPRouteSpecRulesInnerActionRequestMirrorPolicy.attributeTypeMap;
    }
}
