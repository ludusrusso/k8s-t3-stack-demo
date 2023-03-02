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
import { IoK8sApiBatchV1JobCondition } from './ioK8sApiBatchV1JobCondition';
import { IoK8sApiBatchV1UncountedTerminatedPods } from './ioK8sApiBatchV1UncountedTerminatedPods';

/**
* JobStatus represents the current state of a Job.
*/
export class IoK8sApiBatchV1JobStatus {
    /**
    * The number of pending and running pods.
    */
    'active'?: number;
    /**
    * CompletedIndexes holds the completed indexes when .spec.completionMode = \"Indexed\" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as \"1,3-5,7\".
    */
    'completedIndexes'?: string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'completionTime'?: Date;
    /**
    * The latest available observations of an object\'s current state. When a Job fails, one of the conditions will have type \"Failed\" and status true. When a Job is suspended, one of the conditions will have type \"Suspended\" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type \"Complete\" and status true. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
    */
    'conditions'?: Array<IoK8sApiBatchV1JobCondition>;
    /**
    * The number of pods which reached phase Failed.
    */
    'failed'?: number;
    /**
    * The number of pods which have a Ready condition.  This field is beta-level. The job controller populates the field when the feature gate JobReadyPods is enabled (enabled by default).
    */
    'ready'?: number;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'startTime'?: Date;
    /**
    * The number of pods which reached phase Succeeded.
    */
    'succeeded'?: number;
    'uncountedTerminatedPods'?: IoK8sApiBatchV1UncountedTerminatedPods;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "number"
        },
        {
            "name": "completedIndexes",
            "baseName": "completedIndexes",
            "type": "string"
        },
        {
            "name": "completionTime",
            "baseName": "completionTime",
            "type": "Date"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoK8sApiBatchV1JobCondition>"
        },
        {
            "name": "failed",
            "baseName": "failed",
            "type": "number"
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "number"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "succeeded",
            "baseName": "succeeded",
            "type": "number"
        },
        {
            "name": "uncountedTerminatedPods",
            "baseName": "uncountedTerminatedPods",
            "type": "IoK8sApiBatchV1UncountedTerminatedPods"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiBatchV1JobStatus.attributeTypeMap;
    }
}
