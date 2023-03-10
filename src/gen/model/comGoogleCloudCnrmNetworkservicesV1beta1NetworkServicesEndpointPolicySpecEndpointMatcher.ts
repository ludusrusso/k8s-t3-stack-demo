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
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcherMetadataLabelMatcher } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcherMetadataLabelMatcher';

/**
* Required. A matcher that selects endpoints to which the policies should be applied.
*/
export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher {
    'metadataLabelMatcher'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcherMetadataLabelMatcher;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadataLabelMatcher",
            "baseName": "metadataLabelMatcher",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcherMetadataLabelMatcher"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher.attributeTypeMap;
    }
}

