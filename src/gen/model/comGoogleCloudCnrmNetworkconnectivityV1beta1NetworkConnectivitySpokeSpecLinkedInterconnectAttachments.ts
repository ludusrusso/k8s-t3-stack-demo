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
import { ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUrisInner } from './comGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUrisInner';

/**
* Immutable. A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
*/
export class ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachments {
    /**
    * Immutable. A value that controls whether site-to-site data transfer is enabled for these resources. Note that data transfer is available only in supported locations.
    */
    'siteToSiteDataTransfer': boolean;
    /**
    * Immutable.
    */
    'uris': Array<ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUrisInner>;

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
            "type": "Array<ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachmentsUrisInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkconnectivityV1beta1NetworkConnectivitySpokeSpecLinkedInterconnectAttachments.attributeTypeMap;
    }
}

