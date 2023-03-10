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
* Required. Start time of the window in UTC time.
*/
export class ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceSpecMaintenancePolicyWeeklyMaintenanceWindowInnerStartTime {
    /**
    * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value \"24:00:00\" for scenarios like business closing time.
    */
    'hours'?: number;
    /**
    * Minutes of hour of day. Must be from 0 to 59.
    */
    'minutes'?: number;
    /**
    * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
    */
    'nanos'?: number;
    /**
    * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
    */
    'seconds'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hours",
            "baseName": "hours",
            "type": "number"
        },
        {
            "name": "minutes",
            "baseName": "minutes",
            "type": "number"
        },
        {
            "name": "nanos",
            "baseName": "nanos",
            "type": "number"
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMemcacheV1beta1MemcacheInstanceSpecMaintenancePolicyWeeklyMaintenanceWindowInnerStartTime.attributeTypeMap;
    }
}

