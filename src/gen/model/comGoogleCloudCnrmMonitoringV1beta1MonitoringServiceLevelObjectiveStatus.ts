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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner';

export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * Time stamp of the `Create` or most recent `Update` command on this `Slo`.
    */
    'createTime'?: Date;
    /**
    * Time stamp of the `Update` or `Delete` command that made this no longer a current `Slo`. This field is not populated in `ServiceLevelObjective`s returned from calls to `GetServiceLevelObjective` and `ListServiceLevelObjectives`, because it is always empty in the current version. It is populated in `ServiceLevelObjective`s representing previous versions in the output of `ListServiceLevelObjectiveVersions`. Because all old configuration versions are stored, `Update` operations mark the obsoleted version as deleted.
    */
    'deleteTime'?: Date;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * Output only. If set, this SLO is managed at the [Service Management](https://cloud.google.com/service-management/overview) level. Therefore the service yaml file is the source of truth for this SLO, and API `Update` and `Delete` operations are forbidden.
    */
    'serviceManagementOwned'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date"
        },
        {
            "name": "deleteTime",
            "baseName": "deleteTime",
            "type": "Date"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "serviceManagementOwned",
            "baseName": "serviceManagementOwned",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringServiceLevelObjectiveStatus.attributeTypeMap;
    }
}
