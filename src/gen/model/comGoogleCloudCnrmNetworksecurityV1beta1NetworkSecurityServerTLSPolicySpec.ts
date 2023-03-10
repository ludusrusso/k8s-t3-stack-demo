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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy } from './comGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy';
import { ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecServerCertificate } from './comGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecServerCertificate';

export class ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpec {
    /**
    * Optional. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allow_open and mtls_policy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
    */
    'allowOpen'?: boolean;
    /**
    * Optional. Free-text description of the resource.
    */
    'description'?: string;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    'mtlsPolicy'?: ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy;
    'projectRef'?: ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'serverCertificate'?: ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecServerCertificate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowOpen",
            "baseName": "allowOpen",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "mtlsPolicy",
            "baseName": "mtlsPolicy",
            "type": "ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecMtlsPolicy"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "serverCertificate",
            "baseName": "serverCertificate",
            "type": "ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpecServerCertificate"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworksecurityV1beta1NetworkSecurityServerTLSPolicySpec.attributeTypeMap;
    }
}

