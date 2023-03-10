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
import { ComGoogleCloudCnrmComputeV1beta1ComputeForwardingRuleSpecIpAddressAddressRef } from './comGoogleCloudCnrmComputeV1beta1ComputeForwardingRuleSpecIpAddressAddressRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerAccessConfigInner {
    'natIpRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeForwardingRuleSpecIpAddressAddressRef;
    /**
    * The networking tier used for configuring this instance. One of PREMIUM or STANDARD.
    */
    'networkTier'?: string;
    /**
    * The DNS domain name for the public PTR record.
    */
    'publicPtrDomainName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "natIpRef",
            "baseName": "natIpRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeForwardingRuleSpecIpAddressAddressRef"
        },
        {
            "name": "networkTier",
            "baseName": "networkTier",
            "type": "string"
        },
        {
            "name": "publicPtrDomainName",
            "baseName": "publicPtrDomainName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerAccessConfigInner.attributeTypeMap;
    }
}

