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
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecFirewallPolicyRef } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecFirewallPolicyRef';
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch';
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetServiceAccountsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetServiceAccountsInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpec {
    /**
    * The Action to perform when the client connection triggers the rule. Can currently be either \"allow\" or \"deny()\" where valid values for status are 403, 404, and 502.
    */
    'action': string;
    /**
    * An optional description for this resource.
    */
    'description'?: string;
    /**
    * The direction in which this rule applies. Possible values: INGRESS, EGRESS
    */
    'direction': string;
    /**
    * Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
    */
    'disabled'?: boolean;
    /**
    * Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on \"goto_next\" rules.
    */
    'enableLogging'?: boolean;
    'firewallPolicyRef': ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecFirewallPolicyRef;
    'match': ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch;
    /**
    * Immutable. An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
    */
    'priority': number;
    'targetResources'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner>;
    'targetServiceAccounts'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetServiceAccountsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "enableLogging",
            "baseName": "enableLogging",
            "type": "boolean"
        },
        {
            "name": "firewallPolicyRef",
            "baseName": "firewallPolicyRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecFirewallPolicyRef"
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecMatch"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "targetResources",
            "baseName": "targetResources",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetResourcesInner>"
        },
        {
            "name": "targetServiceAccounts",
            "baseName": "targetServiceAccounts",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpecTargetServiceAccountsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyRuleSpec.attributeTypeMap;
    }
}
