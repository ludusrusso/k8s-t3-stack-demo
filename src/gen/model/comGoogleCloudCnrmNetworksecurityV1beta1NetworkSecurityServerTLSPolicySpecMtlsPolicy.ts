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
import { ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityClientTLSPolicySpecServerValidationCaInner } from './comGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityClientTLSPolicySpecServerValidationCaInner';

/**
* Optional. Defines a mechanism to provision peer validation certificates for peer to peer authentication (Mutual TLS - mTLS). If not specified, client certificate will not be requested. The connection is treated as TLS and not mTLS. If allow_open and mtls_policy are set, server allows both plain text and mTLS connections.
*/
export class ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy {
    /**
    * Required. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.
    */
    'clientValidationCa': Array<ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityClientTLSPolicySpecServerValidationCaInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientValidationCa",
            "baseName": "clientValidationCa",
            "type": "Array<ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityClientTLSPolicySpecServerValidationCaInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy.attributeTypeMap;
    }
}
