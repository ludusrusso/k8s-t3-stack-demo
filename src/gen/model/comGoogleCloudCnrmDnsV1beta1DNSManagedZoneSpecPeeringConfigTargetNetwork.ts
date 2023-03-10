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
import { ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetworkNetworkRef } from './comGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetworkNetworkRef';

/**
* The network with which to peer.
*/
export class ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork {
    'networkRef': ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetworkNetworkRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "networkRef",
            "baseName": "networkRef",
            "type": "ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetworkNetworkRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecPeeringConfigTargetNetwork.attributeTypeMap;
    }
}

