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
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatchLayer4ConfigsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatchLayer4ConfigsInner';

/**
* A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding \'action\' is enforced.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch {
    /**
    * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 256.
    */
    'destIPRanges'?: Array<string>;
    /**
    * Pairs of IP protocols and ports that the rule should match.
    */
    'layer4Configs': Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatchLayer4ConfigsInner>;
    /**
    * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 256.
    */
    'srcIPRanges'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destIPRanges",
            "baseName": "destIPRanges",
            "type": "Array<string>"
        },
        {
            "name": "layer4Configs",
            "baseName": "layer4Configs",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatchLayer4ConfigsInner>"
        },
        {
            "name": "srcIPRanges",
            "baseName": "srcIPRanges",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch.attributeTypeMap;
    }
}

