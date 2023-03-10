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
import { ComGoogleCloudCnrmComputeV1beta1ComputeRouterInterfaceSpecVpnTunnelRef } from './comGoogleCloudCnrmComputeV1beta1ComputeRouterInterfaceSpecVpnTunnelRef';

/**
* Immutable. The URIs of linked VPN tunnel resources
*/
export class ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedVpnTunnels {
    /**
    * Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
    */
    'siteToSiteDataTransfer': boolean;
    /**
    * Immutable.
    */
    'uris': Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterInterfaceSpecVpnTunnelRef>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siteToSiteDataTransfer",
            "baseName": "siteToSiteDataTransfer",
            "type": "boolean"
        },
        {
            "name": "uris",
            "baseName": "uris",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeRouterInterfaceSpecVpnTunnelRef>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedVpnTunnels.attributeTypeMap;
    }
}

