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

/**
* Output only. The Condition of this Service, containing its readiness status, and detailed error information in case it did not reach a serving state. See comments in `reconciling` for additional information on reconciliation process in Cloud Run.
*/
export class ComGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition {
    /**
    * A reason for the job condition. Possible values: JOB_REASON_UNDEFINED, JOB_STATUS_SERVICE_POLLING_ERROR
    */
    'jobReason'?: string;
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * Human readable message indicating details about the current status.
    */
    'message'?: string;
    /**
    * A common (service-level) reason for this condition. Possible values: COMMON_REASON_UNDEFINED, UNKNOWN, REVISION_FAILED, PROGRESS_DEADLINE_EXCEEDED, CONTAINER_MISSING, CONTAINER_PERMISSION_DENIED, CONTAINER_IMAGE_UNAUTHORIZED, CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED, ENCRYPTION_KEY_PERMISSION_DENIED, ENCRYPTION_KEY_CHECK_FAILED, SECRETS_ACCESS_CHECK_FAILED, WAITING_FOR_OPERATION, IMMEDIATE_RETRY, POSTPONED_RETRY, INTERNAL
    */
    'reason'?: string;
    /**
    * A reason for the revision condition. Possible values: REVISION_REASON_UNDEFINED, PENDING, RESERVE, RETIRED, RETIRING, RECREATING, HEALTH_CHECK_CONTAINER_ERROR, CUSTOMIZED_PATH_RESPONSE_PENDING, MIN_INSTANCES_NOT_PROVISIONED, ACTIVE_REVISION_LIMIT_REACHED, NO_DEPLOYMENT
    */
    'revisionReason'?: string;
    /**
    * How to interpret failures of this condition, one of Error, Warning, Info Possible values: SEVERITY_UNSPECIFIED, ERROR, WARNING, INFO
    */
    'severity'?: string;
    /**
    * State of the condition. Possible values: STATE_UNSPECIFIED, CONDITION_PENDING, CONDITION_RECONCILING, CONDITION_FAILED, CONDITION_SUCCEEDED
    */
    'state'?: string;
    /**
    * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * \"Ready\": True when the Resource is ready.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jobReason",
            "baseName": "jobReason",
            "type": "string"
        },
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "revisionReason",
            "baseName": "revisionReason",
            "type": "string"
        },
        {
            "name": "severity",
            "baseName": "severity",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceStatusTerminalCondition.attributeTypeMap;
    }
}
