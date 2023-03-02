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
* Output only. The \"running state\" of the Feature in this Hub.
*/
export class ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureStatusStateState {
    /**
    * The high-level, machine-readable status of this Feature. Possible values: CODE_UNSPECIFIED, OK, WARNING, ERROR
    */
    'code'?: string;
    /**
    * A human-readable description of the current status.
    */
    'description'?: string;
    /**
    * The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC \"Zulu\" format, with nanosecond resolution and up to nine fractional digits. Examples: \"2014-10-02T15:01:23Z\" and \"2014-10-02T15:01:23.045123456Z\"
    */
    'updateTime'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmGkehubV1beta1GKEHubFeatureStatusStateState.attributeTypeMap;
    }
}

