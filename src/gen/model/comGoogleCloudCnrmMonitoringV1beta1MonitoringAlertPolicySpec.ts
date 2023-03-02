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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecAlertStrategy } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecAlertStrategy';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInner';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecDocumentation } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecDocumentation';
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecNotificationChannelsInner } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecNotificationChannelsInner';

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpec {
    'alertStrategy'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecAlertStrategy;
    /**
    * How to combine the results of multiple conditions to determine if an incident should be opened. Possible values: [\"AND\", \"OR\", \"AND_WITH_MATCHING_RESOURCE\"].
    */
    'combiner': string;
    /**
    * A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions.
    */
    'conditions': Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInner>;
    /**
    * A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don\'t use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.
    */
    'displayName': string;
    'documentation'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecDocumentation;
    /**
    * Whether or not the policy is enabled. The default is true.
    */
    'enabled'?: boolean;
    'notificationChannels'?: Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecNotificationChannelsInner>;
    /**
    * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alertStrategy",
            "baseName": "alertStrategy",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecAlertStrategy"
        },
        {
            "name": "combiner",
            "baseName": "combiner",
            "type": "string"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecConditionsInner>"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "documentation",
            "baseName": "documentation",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecDocumentation"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "notificationChannels",
            "baseName": "notificationChannels",
            "type": "Array<ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpecNotificationChannelsInner>"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringAlertPolicySpec.attributeTypeMap;
    }
}

