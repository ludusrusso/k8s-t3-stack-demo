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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner';

/**
* Required. The detailed rule defining how to route matched traffic.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerAction {
    /**
    * Required. The destination services to which traffic should be forwarded. At least one destination service is required.
    */
    'destinations': Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destinations",
            "baseName": "destinations",
            "type": "Array<ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerAction.attributeTypeMap;
    }
}
