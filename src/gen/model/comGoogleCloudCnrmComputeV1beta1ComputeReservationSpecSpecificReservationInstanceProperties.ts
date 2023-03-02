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
import { ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesGuestAcceleratorsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesGuestAcceleratorsInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsdsInner } from './comGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsdsInner';

/**
* Immutable. The instance properties for the reservation.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties {
    /**
    * Immutable. Guest accelerator type and count.
    */
    'guestAccelerators'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesGuestAcceleratorsInner>;
    /**
    * Immutable. The amount of local ssd to reserve with each instance. This reserves disks of type \'local-ssd\'.
    */
    'localSsds'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsdsInner>;
    /**
    * Immutable. The name of the machine type to reserve.
    */
    'machineType': string;
    /**
    * Immutable. The minimum CPU platform for the reservation. For example, \'\"Intel Skylake\"\'. See the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones) for information on available CPU platforms.
    */
    'minCpuPlatform'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "guestAccelerators",
            "baseName": "guestAccelerators",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesGuestAcceleratorsInner>"
        },
        {
            "name": "localSsds",
            "baseName": "localSsds",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsdsInner>"
        },
        {
            "name": "machineType",
            "baseName": "machineType",
            "type": "string"
        },
        {
            "name": "minCpuPlatform",
            "baseName": "minCpuPlatform",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeReservationSpecSpecificReservationInstanceProperties.attributeTypeMap;
    }
}
