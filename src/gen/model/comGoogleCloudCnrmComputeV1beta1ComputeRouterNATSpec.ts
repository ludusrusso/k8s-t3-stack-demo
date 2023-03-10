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
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecDrainNatIpsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecDrainNatIpsInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecLogConfig } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecLogConfig';
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecNatIpsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecNatIpsInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecRouterRef } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecRouterRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecSubnetworkInner } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecSubnetworkInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpec {
    'drainNatIps'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecDrainNatIpsInner>;
    /**
    * Enable Dynamic Port Allocation. If minPorts is set, minPortsPerVm must be set to a power of two greater than or equal to 32.  If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.  Mutually exclusive with enableEndpointIndependentMapping.
    */
    'enableDynamicPortAllocation'?: boolean;
    /**
    * Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
    */
    'enableEndpointIndependentMapping'?: boolean;
    /**
    * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
    */
    'icmpIdleTimeoutSec'?: number;
    'logConfig'?: ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecLogConfig;
    /**
    * Minimum number of ports allocated to a VM from this NAT.
    */
    'minPortsPerVm'?: number;
    /**
    * How external IPs should be allocated for this NAT. Valid values are \'AUTO_ONLY\' for only allowing NAT IPs allocated by Google Cloud Platform, or \'MANUAL_ONLY\' for only user-allocated NAT IP addresses. Possible values: [\"MANUAL_ONLY\", \"AUTO_ONLY\"].
    */
    'natIpAllocateOption': string;
    'natIps'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecNatIpsInner>;
    /**
    * Immutable. Region where the router and NAT reside.
    */
    'region': string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'routerRef': ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecRouterRef;
    /**
    * How NAT should be configured per Subnetwork. If \'ALL_SUBNETWORKS_ALL_IP_RANGES\', all of the IP ranges in every Subnetwork are allowed to Nat. If \'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES\', all of the primary IP ranges in every Subnetwork are allowed to Nat. \'LIST_OF_SUBNETWORKS\': A list of Subnetworks are allowed to Nat (specified in the field subnetwork below). Note that if this field contains ALL_SUBNETWORKS_ALL_IP_RANGES or ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any other RouterNat section in any Router for this network in this region. Possible values: [\"ALL_SUBNETWORKS_ALL_IP_RANGES\", \"ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES\", \"LIST_OF_SUBNETWORKS\"].
    */
    'sourceSubnetworkIpRangesToNat': string;
    /**
    * One or more subnetwork NAT configurations. Only used if \'source_subnetwork_ip_ranges_to_nat\' is set to \'LIST_OF_SUBNETWORKS\'.
    */
    'subnetwork'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecSubnetworkInner>;
    /**
    * Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.
    */
    'tcpEstablishedIdleTimeoutSec'?: number;
    /**
    * Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.
    */
    'tcpTransitoryIdleTimeoutSec'?: number;
    /**
    * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
    */
    'udpIdleTimeoutSec'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "drainNatIps",
            "baseName": "drainNatIps",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecDrainNatIpsInner>"
        },
        {
            "name": "enableDynamicPortAllocation",
            "baseName": "enableDynamicPortAllocation",
            "type": "boolean"
        },
        {
            "name": "enableEndpointIndependentMapping",
            "baseName": "enableEndpointIndependentMapping",
            "type": "boolean"
        },
        {
            "name": "icmpIdleTimeoutSec",
            "baseName": "icmpIdleTimeoutSec",
            "type": "number"
        },
        {
            "name": "logConfig",
            "baseName": "logConfig",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecLogConfig"
        },
        {
            "name": "minPortsPerVm",
            "baseName": "minPortsPerVm",
            "type": "number"
        },
        {
            "name": "natIpAllocateOption",
            "baseName": "natIpAllocateOption",
            "type": "string"
        },
        {
            "name": "natIps",
            "baseName": "natIps",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecNatIpsInner>"
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
            "name": "routerRef",
            "baseName": "routerRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecRouterRef"
        },
        {
            "name": "sourceSubnetworkIpRangesToNat",
            "baseName": "sourceSubnetworkIpRangesToNat",
            "type": "string"
        },
        {
            "name": "subnetwork",
            "baseName": "subnetwork",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpecSubnetworkInner>"
        },
        {
            "name": "tcpEstablishedIdleTimeoutSec",
            "baseName": "tcpEstablishedIdleTimeoutSec",
            "type": "number"
        },
        {
            "name": "tcpTransitoryIdleTimeoutSec",
            "baseName": "tcpTransitoryIdleTimeoutSec",
            "type": "number"
        },
        {
            "name": "udpIdleTimeoutSec",
            "baseName": "udpIdleTimeoutSec",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeRouterNATSpec.attributeTypeMap;
    }
}

