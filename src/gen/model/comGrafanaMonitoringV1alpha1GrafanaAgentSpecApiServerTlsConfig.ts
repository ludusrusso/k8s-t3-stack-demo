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
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCa } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCa';
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert';
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigKeySecret } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigKeySecret';

/**
* TLS Config to use for accessing apiserver.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecApiServerTlsConfig {
    'ca'?: ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCa;
    /**
    * Path to the CA cert in the Prometheus container to use for the targets.
    */
    'caFile'?: string;
    'cert'?: ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert;
    /**
    * Path to the client cert file in the Prometheus container for the targets.
    */
    'certFile'?: string;
    /**
    * Disable target certificate validation.
    */
    'insecureSkipVerify'?: boolean;
    /**
    * Path to the client key file in the Prometheus container for the targets.
    */
    'keyFile'?: string;
    'keySecret'?: ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigKeySecret;
    /**
    * Used to verify the hostname for the targets.
    */
    'serverName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ca",
            "baseName": "ca",
            "type": "ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCa"
        },
        {
            "name": "caFile",
            "baseName": "caFile",
            "type": "string"
        },
        {
            "name": "cert",
            "baseName": "cert",
            "type": "ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert"
        },
        {
            "name": "certFile",
            "baseName": "certFile",
            "type": "string"
        },
        {
            "name": "insecureSkipVerify",
            "baseName": "insecureSkipVerify",
            "type": "boolean"
        },
        {
            "name": "keyFile",
            "baseName": "keyFile",
            "type": "string"
        },
        {
            "name": "keySecret",
            "baseName": "keySecret",
            "type": "ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigKeySecret"
        },
        {
            "name": "serverName",
            "baseName": "serverName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecApiServerTlsConfig.attributeTypeMap;
    }
}

