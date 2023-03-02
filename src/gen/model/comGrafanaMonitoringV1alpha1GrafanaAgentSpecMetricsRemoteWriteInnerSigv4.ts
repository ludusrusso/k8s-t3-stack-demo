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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4AccessKey } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4AccessKey';
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4SecretKey } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4SecretKey';

/**
* SigV4 configures SigV4-based authentication to the remote_write endpoint. Will be used if SigV4 is defined, even with an empty object.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4 {
    'accessKey'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4AccessKey;
    /**
    * Profile is the named AWS profile to use for authentication.
    */
    'profile'?: string;
    /**
    * Region of the AWS endpoint. If blank, the region from the default credentials chain is used.
    */
    'region'?: string;
    /**
    * RoleARN is the AWS Role ARN to use for authentication, as an alternative for using the AWS API keys.
    */
    'roleARN'?: string;
    'secretKey'?: ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4SecretKey;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessKey",
            "baseName": "accessKey",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4AccessKey"
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "roleARN",
            "baseName": "roleARN",
            "type": "string"
        },
        {
            "name": "secretKey",
            "baseName": "secretKey",
            "type": "ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4SecretKey"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecMetricsRemoteWriteInnerSigv4.attributeTypeMap;
    }
}

