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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTCPRouteSpecRulesInnerActionDestinationsInnerServiceRef } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTCPRouteSpecRulesInnerActionDestinationsInnerServiceRef';

export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner {
    'serviceRef': ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTCPRouteSpecRulesInnerActionDestinationsInnerServiceRef;
    /**
    * Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
    */
    'weight'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "serviceRef",
            "baseName": "serviceRef",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTCPRouteSpecRulesInnerActionDestinationsInnerServiceRef"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesTLSRouteSpecRulesInnerActionDestinationsInner.attributeTypeMap;
    }
}

