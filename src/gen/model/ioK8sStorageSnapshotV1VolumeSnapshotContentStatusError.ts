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
* error is the last observed error during snapshot creation, if any. Upon success after retry, this error field will be cleared.
*/
export class IoK8sStorageSnapshotV1VolumeSnapshotContentStatusError {
    /**
    * message is a string detailing the encountered error during snapshot creation if specified. NOTE: message may be logged, and it should not contain sensitive information.
    */
    'message'?: string;
    /**
    * time is the timestamp when the error was encountered.
    */
    'time'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sStorageSnapshotV1VolumeSnapshotContentStatusError.attributeTypeMap;
    }
}

