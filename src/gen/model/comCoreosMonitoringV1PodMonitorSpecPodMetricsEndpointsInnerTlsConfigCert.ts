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
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdConfigMap } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdConfigMap';
import { ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdSecret } from './comCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdSecret';

/**
* Struct containing the client cert file for the targets.
*/
export class ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert {
    'configMap'?: ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdConfigMap;
    'secret'?: ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdSecret;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configMap",
            "baseName": "configMap",
            "type": "ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdConfigMap"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerOauth2ClientIdSecret"
        }    ];

    static getAttributeTypeMap() {
        return ComCoreosMonitoringV1PodMonitorSpecPodMetricsEndpointsInnerTlsConfigCert.attributeTypeMap;
    }
}

