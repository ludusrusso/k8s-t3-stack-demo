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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecContentMatchersInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecContentMatchersInner';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecMonitoredResource } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecMonitoredResource';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecProjectRef } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecProjectRef';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecResourceGroup } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecResourceGroup';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecTcpCheck } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecTcpCheck';

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpec {
    /**
    * The content that is expected to appear in the data returned by the target server against which the check is run.  Currently, only the first entry in the `content_matchers` list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check.
    */
    'contentMatchers'?: Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecContentMatchersInner>;
    /**
    * A human-friendly name for the Uptime check configuration. The display name should be unique within a Stackdriver Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required.
    */
    'displayName': string;
    'httpCheck'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck;
    'monitoredResource'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecMonitoredResource;
    /**
    * How often, in seconds, the Uptime check is performed. Currently, the only supported values are `60s` (1 minute), `300s` (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional, defaults to `60s`.
    */
    'period'?: string;
    'projectRef': ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecProjectRef;
    'resourceGroup'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecResourceGroup;
    /**
    * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;
    /**
    * The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations.  Not specifying this field will result in Uptime checks running from all available regions.
    */
    'selectedRegions'?: Array<string>;
    'tcpCheck'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecTcpCheck;
    /**
    * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required.
    */
    'timeout': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contentMatchers",
            "baseName": "contentMatchers",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecContentMatchersInner>"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "httpCheck",
            "baseName": "httpCheck",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck"
        },
        {
            "name": "monitoredResource",
            "baseName": "monitoredResource",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecMonitoredResource"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecProjectRef"
        },
        {
            "name": "resourceGroup",
            "baseName": "resourceGroup",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecResourceGroup"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "selectedRegions",
            "baseName": "selectedRegions",
            "type": "Array<string>"
        },
        {
            "name": "tcpCheck",
            "baseName": "tcpCheck",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecTcpCheck"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpec.attributeTypeMap;
    }
}
