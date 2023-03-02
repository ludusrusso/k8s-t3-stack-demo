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
import { ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef } from './comGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAddonsConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAddonsConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAuthenticatorGroupsConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAuthenticatorGroupsConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscaling } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscaling';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterTelemetry } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterTelemetry';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecConfidentialNodes } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecConfidentialNodes';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDatabaseEncryption } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDatabaseEncryption';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDefaultSnatStatus } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDefaultSnatStatus';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIdentityServiceConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIdentityServiceConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIpAllocationPolicy } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIpAllocationPolicy';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicy } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicy';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuth } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuth';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuthorizedNetworksConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuthorizedNetworksConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMonitoringConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMonitoringConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNetworkPolicy } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNetworkPolicy';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPodSecurityPolicyConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPodSecurityPolicyConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecReleaseChannel } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecReleaseChannel';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecResourceUsageExportConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecResourceUsageExportConfig';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecVerticalPodAutoscaling } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecVerticalPodAutoscaling';
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecWorkloadIdentityConfig } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecWorkloadIdentityConfig';

export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpec {
    'addonsConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAddonsConfig;
    'authenticatorGroupsConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAuthenticatorGroupsConfig;
    'clusterAutoscaling'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscaling;
    /**
    * Immutable. The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined.
    */
    'clusterIpv4Cidr'?: string;
    'clusterTelemetry'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterTelemetry;
    'confidentialNodes'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecConfidentialNodes;
    'databaseEncryption'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDatabaseEncryption;
    /**
    * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
    */
    'datapathProvider'?: string;
    /**
    * Immutable. The default maximum number of pods per node in this cluster. This doesn\'t work on \"routes-based\" clusters, clusters that don\'t have IP Aliasing enabled.
    */
    'defaultMaxPodsPerNode'?: number;
    'defaultSnatStatus'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDefaultSnatStatus;
    /**
    * Immutable.  Description of the cluster.
    */
    'description'?: string;
    'dnsConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig;
    /**
    * Immutable. Enable Autopilot for this cluster.
    */
    'enableAutopilot'?: boolean;
    /**
    * Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binary Authorization.
    */
    'enableBinaryAuthorization'?: boolean;
    /**
    * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
    */
    'enableIntranodeVisibility'?: boolean;
    /**
    * Immutable. Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days.
    */
    'enableKubernetesAlpha'?: boolean;
    /**
    * Whether L4ILB Subsetting is enabled for this cluster.
    */
    'enableL4IlbSubsetting'?: boolean;
    /**
    * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false.
    */
    'enableLegacyAbac'?: boolean;
    /**
    * Enable Shielded Nodes features on all nodes in this cluster. Defaults to true.
    */
    'enableShieldedNodes'?: boolean;
    /**
    * Immutable. Whether to enable Cloud TPU resources in this cluster.
    */
    'enableTpu'?: boolean;
    'identityServiceConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIdentityServiceConfig;
    /**
    * Immutable. The number of nodes to create in this cluster\'s default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you\'re using google_container_node_pool objects with no default node pool, you\'ll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true.
    */
    'initialNodeCount'?: number;
    'ipAllocationPolicy'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIpAllocationPolicy;
    /**
    * Immutable. The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
    */
    'location': string;
    'loggingConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig;
    /**
    * The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes.
    */
    'loggingService'?: string;
    'maintenancePolicy'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicy;
    'masterAuth'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuth;
    'masterAuthorizedNetworksConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuthorizedNetworksConfig;
    /**
    * The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster\'s version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).
    */
    'minMasterVersion'?: string;
    'monitoringConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMonitoringConfig;
    /**
    * The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes.
    */
    'monitoringService'?: string;
    'networkPolicy'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNetworkPolicy;
    'networkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner;
    /**
    * Immutable. Determines whether alias IPs or routes will be used for pod IPs in the cluster.
    */
    'networkingMode'?: string;
    'nodeConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfig;
    /**
    * The list of zones in which the cluster\'s nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster\'s zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster\'s zone.
    */
    'nodeLocations'?: Array<string>;
    'nodeVersion'?: string;
    'notificationConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfig;
    'podSecurityPolicyConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPodSecurityPolicyConfig;
    'privateClusterConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig;
    /**
    * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
    */
    'privateIpv6GoogleAccess'?: string;
    'releaseChannel'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecReleaseChannel;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'resourceUsageExportConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecResourceUsageExportConfig;
    'subnetworkRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef;
    'verticalPodAutoscaling'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecVerticalPodAutoscaling;
    'workloadIdentityConfig'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecWorkloadIdentityConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addonsConfig",
            "baseName": "addonsConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAddonsConfig"
        },
        {
            "name": "authenticatorGroupsConfig",
            "baseName": "authenticatorGroupsConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecAuthenticatorGroupsConfig"
        },
        {
            "name": "clusterAutoscaling",
            "baseName": "clusterAutoscaling",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterAutoscaling"
        },
        {
            "name": "clusterIpv4Cidr",
            "baseName": "clusterIpv4Cidr",
            "type": "string"
        },
        {
            "name": "clusterTelemetry",
            "baseName": "clusterTelemetry",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecClusterTelemetry"
        },
        {
            "name": "confidentialNodes",
            "baseName": "confidentialNodes",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecConfidentialNodes"
        },
        {
            "name": "databaseEncryption",
            "baseName": "databaseEncryption",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDatabaseEncryption"
        },
        {
            "name": "datapathProvider",
            "baseName": "datapathProvider",
            "type": "string"
        },
        {
            "name": "defaultMaxPodsPerNode",
            "baseName": "defaultMaxPodsPerNode",
            "type": "number"
        },
        {
            "name": "defaultSnatStatus",
            "baseName": "defaultSnatStatus",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDefaultSnatStatus"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dnsConfig",
            "baseName": "dnsConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecDnsConfig"
        },
        {
            "name": "enableAutopilot",
            "baseName": "enableAutopilot",
            "type": "boolean"
        },
        {
            "name": "enableBinaryAuthorization",
            "baseName": "enableBinaryAuthorization",
            "type": "boolean"
        },
        {
            "name": "enableIntranodeVisibility",
            "baseName": "enableIntranodeVisibility",
            "type": "boolean"
        },
        {
            "name": "enableKubernetesAlpha",
            "baseName": "enableKubernetesAlpha",
            "type": "boolean"
        },
        {
            "name": "enableL4IlbSubsetting",
            "baseName": "enableL4IlbSubsetting",
            "type": "boolean"
        },
        {
            "name": "enableLegacyAbac",
            "baseName": "enableLegacyAbac",
            "type": "boolean"
        },
        {
            "name": "enableShieldedNodes",
            "baseName": "enableShieldedNodes",
            "type": "boolean"
        },
        {
            "name": "enableTpu",
            "baseName": "enableTpu",
            "type": "boolean"
        },
        {
            "name": "identityServiceConfig",
            "baseName": "identityServiceConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIdentityServiceConfig"
        },
        {
            "name": "initialNodeCount",
            "baseName": "initialNodeCount",
            "type": "number"
        },
        {
            "name": "ipAllocationPolicy",
            "baseName": "ipAllocationPolicy",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecIpAllocationPolicy"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "loggingConfig",
            "baseName": "loggingConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecLoggingConfig"
        },
        {
            "name": "loggingService",
            "baseName": "loggingService",
            "type": "string"
        },
        {
            "name": "maintenancePolicy",
            "baseName": "maintenancePolicy",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMaintenancePolicy"
        },
        {
            "name": "masterAuth",
            "baseName": "masterAuth",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuth"
        },
        {
            "name": "masterAuthorizedNetworksConfig",
            "baseName": "masterAuthorizedNetworksConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMasterAuthorizedNetworksConfig"
        },
        {
            "name": "minMasterVersion",
            "baseName": "minMasterVersion",
            "type": "string"
        },
        {
            "name": "monitoringConfig",
            "baseName": "monitoringConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecMonitoringConfig"
        },
        {
            "name": "monitoringService",
            "baseName": "monitoringService",
            "type": "string"
        },
        {
            "name": "networkPolicy",
            "baseName": "networkPolicy",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNetworkPolicy"
        },
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner"
        },
        {
            "name": "networkingMode",
            "baseName": "networkingMode",
            "type": "string"
        },
        {
            "name": "nodeConfig",
            "baseName": "nodeConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNodeConfig"
        },
        {
            "name": "nodeLocations",
            "baseName": "nodeLocations",
            "type": "Array<string>"
        },
        {
            "name": "nodeVersion",
            "baseName": "nodeVersion",
            "type": "string"
        },
        {
            "name": "notificationConfig",
            "baseName": "notificationConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfig"
        },
        {
            "name": "podSecurityPolicyConfig",
            "baseName": "podSecurityPolicyConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPodSecurityPolicyConfig"
        },
        {
            "name": "privateClusterConfig",
            "baseName": "privateClusterConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecPrivateClusterConfig"
        },
        {
            "name": "privateIpv6GoogleAccess",
            "baseName": "privateIpv6GoogleAccess",
            "type": "string"
        },
        {
            "name": "releaseChannel",
            "baseName": "releaseChannel",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecReleaseChannel"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "resourceUsageExportConfig",
            "baseName": "resourceUsageExportConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecResourceUsageExportConfig"
        },
        {
            "name": "subnetworkRef",
            "baseName": "subnetworkRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeInstanceSpecNetworkInterfaceInnerSubnetworkRef"
        },
        {
            "name": "verticalPodAutoscaling",
            "baseName": "verticalPodAutoscaling",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecVerticalPodAutoscaling"
        },
        {
            "name": "workloadIdentityConfig",
            "baseName": "workloadIdentityConfig",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecWorkloadIdentityConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpec.attributeTypeMap;
    }
}

