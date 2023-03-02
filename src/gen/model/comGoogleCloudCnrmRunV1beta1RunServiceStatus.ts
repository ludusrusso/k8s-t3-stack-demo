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
import { ComGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition } from './comGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition';
import { ComGoogleCloudCnrmRunV1beta1RunServiceStatusTrafficStatusesInner } from './comGoogleCloudCnrmRunV1beta1RunServiceStatusTrafficStatusesInner';

export class ComGoogleCloudCnrmRunV1beta1RunServiceStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * Output only. The creation time.
    */
    'createTime'?: Date;
    /**
    * Output only. Email address of the authenticated creator.
    */
    'creator'?: string;
    /**
    * Output only. The deletion time.
    */
    'deleteTime'?: Date;
    /**
    * Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
    */
    'etag'?: string;
    /**
    * Output only. For a deleted resource, the time after which it will be permamently deleted.
    */
    'expireTime'?: Date;
    /**
    * Map of string keys and values that can be used to organize and categorize objects. User-provided labels are shared with Google\'s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run will populate some labels with \'run.googleapis.com\' or \'serving.knative.dev\' namespaces. Those labels are read-only, and user changes will not be preserved.
    */
    'labels'?: { [key: string]: string; };
    /**
    * Output only. Email address of the last authenticated modifier.
    */
    'lastModifier'?: string;
    /**
    * Output only. Name of the last created revision. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
    */
    'latestCreatedRevision'?: string;
    /**
    * Output only. Name of the latest revision that is serving traffic. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
    */
    'latestReadyRevision'?: string;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, `observed_generation`, `latest_ready_revison`, `traffic_statuses`, and `uri` will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in `terminal_condition.state`. If reconciliation succeeded, the following fields will match: `traffic` and `traffic_statuses`, `observed_generation` and `generation`, `latest_ready_revision` and `latest_created_revision`. If reconciliation failed, `traffic_statuses`, `observed_generation`, and `latest_ready_revision` will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in `terminal_condition` and `conditions`.
    */
    'reconciling'?: boolean;
    /**
    * Output only. A number that monotonically increases every time the user modifies the desired state.
    */
    'resourceGeneration'?: number;
    'terminalCondition'?: ComGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition;
    /**
    * Output only. Detailed status information for corresponding traffic targets. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
    */
    'trafficStatuses'?: Array<ComGoogleCloudCnrmRunV1beta1RunServiceStatusTrafficStatusesInner>;
    /**
    * Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
    */
    'uid'?: string;
    /**
    * Output only. The last-modified time.
    */
    'updateTime'?: Date;
    /**
    * Output only. The main URI in which this Service is serving traffic.
    */
    'uri'?: string;

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
            "name": "creator",
            "baseName": "creator",
            "type": "string"
        },
        {
            "name": "deleteTime",
            "baseName": "deleteTime",
            "type": "Date"
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string"
        },
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "lastModifier",
            "baseName": "lastModifier",
            "type": "string"
        },
        {
            "name": "latestCreatedRevision",
            "baseName": "latestCreatedRevision",
            "type": "string"
        },
        {
            "name": "latestReadyRevision",
            "baseName": "latestReadyRevision",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "reconciling",
            "baseName": "reconciling",
            "type": "boolean"
        },
        {
            "name": "resourceGeneration",
            "baseName": "resourceGeneration",
            "type": "number"
        },
        {
            "name": "terminalCondition",
            "baseName": "terminalCondition",
            "type": "ComGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition"
        },
        {
            "name": "trafficStatuses",
            "baseName": "trafficStatuses",
            "type": "Array<ComGoogleCloudCnrmRunV1beta1RunServiceStatusTrafficStatusesInner>"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceStatus.attributeTypeMap;
    }
}

