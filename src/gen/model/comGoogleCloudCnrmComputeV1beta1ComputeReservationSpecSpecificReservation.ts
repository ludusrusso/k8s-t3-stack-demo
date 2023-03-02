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
import { ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties } from './comGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties';

/**
* Reservation for instances with specific machine shapes.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservation {
    /**
    * The number of resources that are allocated.
    */
    'count': number;
    /**
    * How many instances are in use.
    */
    'inUseCount'?: number;
    'instanceProperties': ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "inUseCount",
            "baseName": "inUseCount",
            "type": "number"
        },
        {
            "name": "instanceProperties",
            "baseName": "instanceProperties",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservation.attributeTypeMap;
    }
}
