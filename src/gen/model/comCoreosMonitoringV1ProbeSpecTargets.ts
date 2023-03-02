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
import { ComCoreosMonitoringV1ProbeSpecTargetsIngress } from './comCoreosMonitoringV1ProbeSpecTargetsIngress';
import { ComCoreosMonitoringV1ProbeSpecTargetsStaticConfig } from './comCoreosMonitoringV1ProbeSpecTargetsStaticConfig';

/**
* Targets defines a set of static or dynamically discovered targets to probe.
*/
export class ComCoreosMonitoringV1ProbeSpecTargets {
    'ingress'?: ComCoreosMonitoringV1ProbeSpecTargetsIngress;
    'staticConfig'?: ComCoreosMonitoringV1ProbeSpecTargetsStaticConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ingress",
            "baseName": "ingress",
            "type": "ComCoreosMonitoringV1ProbeSpecTargetsIngress"
        },
        {
            "name": "staticConfig",
            "baseName": "staticConfig",
            "type": "ComCoreosMonitoringV1ProbeSpecTargetsStaticConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComCoreosMonitoringV1ProbeSpecTargets.attributeTypeMap;
    }
}

