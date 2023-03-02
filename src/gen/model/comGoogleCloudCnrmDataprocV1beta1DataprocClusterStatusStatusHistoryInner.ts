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

export class ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusStatusHistoryInner {
    /**
    * Optional. Output only. Details of cluster\'s state.
    */
    'detail'?: string;
    /**
    * Output only. The cluster\'s state. Possible values: UNKNOWN, CREATING, RUNNING, ERROR, DELETING, UPDATING, STOPPING, STOPPED, STARTING
    */
    'state'?: string;
    /**
    * Output only. Time when this state was entered (see JSON representation of [Timestamp](https://developers.google.com/protocol-buffers/docs/proto3#json)).
    */
    'stateStartTime'?: Date;
    /**
    * Output only. Additional state information that includes status reported by the agent. Possible values: UNSPECIFIED, UNHEALTHY, STALE_STATUS
    */
    'substate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "stateStartTime",
            "baseName": "stateStartTime",
            "type": "Date"
        },
        {
            "name": "substate",
            "baseName": "substate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocClusterStatusStatusHistoryInner.attributeTypeMap;
    }
}
