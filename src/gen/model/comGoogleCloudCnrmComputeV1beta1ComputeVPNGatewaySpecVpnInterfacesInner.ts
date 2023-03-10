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
import { ComGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInnerInterconnectAttachmentRef } from './comGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInnerInterconnectAttachmentRef';

export class ComGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInner {
    /**
    * Immutable. The numeric ID of this VPN gateway interface.
    */
    'id'?: number;
    'interconnectAttachmentRef'?: ComGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInnerInterconnectAttachmentRef;
    /**
    * The external IP address for this VPN gateway interface.
    */
    'ipAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "interconnectAttachmentRef",
            "baseName": "interconnectAttachmentRef",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInnerInterconnectAttachmentRef"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeVPNGatewaySpecVpnInterfacesInner.attributeTypeMap;
    }
}

