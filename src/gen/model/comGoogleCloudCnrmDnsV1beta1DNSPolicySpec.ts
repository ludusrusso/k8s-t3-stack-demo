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
import { ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPrivateVisibilityConfigNetworksInner } from './comGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPrivateVisibilityConfigNetworksInner';
import { ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig } from './comGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig';

export class ComGoogleCloudCnrmDnsV1beta1DNSPolicySpec {
    'alternativeNameServerConfig'?: ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig;
    /**
    * A textual description field. Defaults to \'Managed by Config Connector\'.
    */
    'description'?: string;
    /**
    * Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. When enabled, a virtual IP address will be allocated from each of the sub-networks that are bound to this policy.
    */
    'enableInboundForwarding'?: boolean;
    /**
    * Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.
    */
    'enableLogging'?: boolean;
    /**
    * List of network names specifying networks to which this policy is applied.
    */
    'networks'?: Array<ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPrivateVisibilityConfigNetworksInner>;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alternativeNameServerConfig",
            "baseName": "alternativeNameServerConfig",
            "type": "ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enableInboundForwarding",
            "baseName": "enableInboundForwarding",
            "type": "boolean"
        },
        {
            "name": "enableLogging",
            "baseName": "enableLogging",
            "type": "boolean"
        },
        {
            "name": "networks",
            "baseName": "networks",
            "type": "Array<ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPrivateVisibilityConfigNetworksInner>"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDnsV1beta1DNSPolicySpec.attributeTypeMap;
    }
}

