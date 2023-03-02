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
* Immutable. Optional. Reservation Affinity for consuming Zonal reservation.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigReservationAffinity {
    /**
    * Immutable. Optional. Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
    */
    'consumeReservationType'?: string;
    /**
    * Immutable. Optional. Corresponds to the label key of reservation resource.
    */
    'key'?: string;
    /**
    * Immutable. Optional. Corresponds to the label values of reservation resource.
    */
    'values'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consumeReservationType",
            "baseName": "consumeReservationType",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocClusterSpecConfigGceClusterConfigReservationAffinity.attributeTypeMap;
    }
}
