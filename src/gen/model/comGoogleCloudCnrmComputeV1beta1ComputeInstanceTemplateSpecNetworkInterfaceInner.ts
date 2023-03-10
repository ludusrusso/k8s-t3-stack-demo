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
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerIpv6AccessConfigInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerIpv6AccessConfigInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAccessConfigInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAccessConfigInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAliasIpRangeInner } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAliasIpRangeInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInner {
    'accessConfig'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAccessConfigInner>;
    /**
    * Immutable. An array of alias IP ranges for this network interface. Can only be specified for network interfaces on subnet-mode networks.
    */
    'aliasIpRange'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAliasIpRangeInner>;
    /**
    * An array of IPv6 access configurations for this interface. Currently, only one IPv6 access config, DIRECT_IPV6, is supported. If there is no ipv6AccessConfig specified, then this instance will have no external IPv6 Internet access.
    */
    'ipv6AccessConfig'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerIpv6AccessConfigInner>;
    /**
    * One of EXTERNAL, INTERNAL to indicate whether the IP can be accessed from the Internet. This field is always inherited from its subnetwork.
    */
    'ipv6AccessType'?: string;
    /**
    * The name of the network_interface.
    */
    'name'?: string;
    /**
    * Immutable. The private IP address to assign to the instance. If empty, the address will be automatically assigned.
    */
    'networkIp'?: string;
    'networkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner;
    /**
    * Immutable. The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET.
    */
    'nicType'?: string;
    /**
    * Immutable. The networking queue count that\'s specified by users for the network interface. Both Rx and Tx queues will be set to this number. It will be empty if not specified.
    */
    'queueCount'?: number;
    /**
    * The stack type for this network interface to identify whether the IPv6 feature is enabled or not. If not specified, IPV4_ONLY will be used.
    */
    'stackType'?: string;
    /**
    * Immutable. The ID of the project in which the subnetwork belongs. If it is not provided, the provider project is used.
    */
    'subnetworkProject'?: string;
    'subnetworkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessConfig",
            "baseName": "accessConfig",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAccessConfigInner>"
        },
        {
            "name": "aliasIpRange",
            "baseName": "aliasIpRange",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInnerAliasIpRangeInner>"
        },
        {
            "name": "ipv6AccessConfig",
            "baseName": "ipv6AccessConfig",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerIpv6AccessConfigInner>"
        },
        {
            "name": "ipv6AccessType",
            "baseName": "ipv6AccessType",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "networkIp",
            "baseName": "networkIp",
            "type": "string"
        },
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner"
        },
        {
            "name": "nicType",
            "baseName": "nicType",
            "type": "string"
        },
        {
            "name": "queueCount",
            "baseName": "queueCount",
            "type": "number"
        },
        {
            "name": "stackType",
            "baseName": "stackType",
            "type": "string"
        },
        {
            "name": "subnetworkProject",
            "baseName": "subnetworkProject",
            "type": "string"
        },
        {
            "name": "subnetworkRef",
            "baseName": "subnetworkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceTemplateSpecNetworkInterfaceInner.attributeTypeMap;
    }
}

