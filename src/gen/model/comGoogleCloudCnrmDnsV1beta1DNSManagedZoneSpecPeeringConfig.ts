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
import { ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork } from './comGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork';

/**
* The presence of this field indicates that DNS Peering is enabled for this zone. The value of this field contains the network to peer with.
*/
export class ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfig {
    'targetNetwork': ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "targetNetwork",
            "baseName": "targetNetwork",
            "type": "ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfig.attributeTypeMap;
    }
}

