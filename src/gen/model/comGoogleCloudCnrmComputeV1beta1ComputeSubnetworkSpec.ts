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
import { ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecLogConfig } from './comGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecLogConfig';
import { ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecNetworkRef } from './comGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecNetworkRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecSecondaryIpRangeInner } from './comGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecSecondaryIpRangeInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpec {
    /**
    * Immutable. An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.
    */
    'description'?: string;
    /**
    * The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported.
    */
    'ipCidrRange': string;
    /**
    * Immutable. The access type of IPv6 address this subnet holds. It\'s immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet cannot enable direct path. Possible values: [\"EXTERNAL\"].
    */
    'ipv6AccessType'?: string;
    'logConfig'?: ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecLogConfig;
    'networkRef': ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecNetworkRef;
    /**
    * When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.
    */
    'privateIpGoogleAccess'?: boolean;
    /**
    * The private IPv6 google access type for the VMs in this subnet.
    */
    'privateIpv6GoogleAccess'?: string;
    /**
    * Immutable. The purpose of the resource. A subnetwork with purpose set to INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is reserved for Internal HTTP(S) Load Balancing.  If set to INTERNAL_HTTPS_LOAD_BALANCER you must also set the \'role\' field.
    */
    'purpose'?: string;
    /**
    * Immutable. The GCP region for this subnetwork.
    */
    'region': string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * The role of subnetwork. Currently, this field is only used when purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. Possible values: [\"ACTIVE\", \"BACKUP\"].
    */
    'role'?: string;
    'secondaryIpRange'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecSecondaryIpRangeInner>;
    /**
    * The stack type for this subnet to identify whether the IPv6 feature is enabled or not. If not specified IPV4_ONLY will be used. Possible values: [\"IPV4_ONLY\", \"IPV4_IPV6\"].
    */
    'stackType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ipCidrRange",
            "baseName": "ipCidrRange",
            "type": "string"
        },
        {
            "name": "ipv6AccessType",
            "baseName": "ipv6AccessType",
            "type": "string"
        },
        {
            "name": "logConfig",
            "baseName": "logConfig",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecLogConfig"
        },
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecNetworkRef"
        },
        {
            "name": "privateIpGoogleAccess",
            "baseName": "privateIpGoogleAccess",
            "type": "boolean"
        },
        {
            "name": "privateIpv6GoogleAccess",
            "baseName": "privateIpv6GoogleAccess",
            "type": "string"
        },
        {
            "name": "purpose",
            "baseName": "purpose",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        },
        {
            "name": "secondaryIpRange",
            "baseName": "secondaryIpRange",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpecSecondaryIpRangeInner>"
        },
        {
            "name": "stackType",
            "baseName": "stackType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeSubnetworkSpec.attributeTypeMap;
    }
}

