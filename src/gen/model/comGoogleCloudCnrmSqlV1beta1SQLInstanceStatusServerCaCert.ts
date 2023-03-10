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

export class ComGoogleCloudCnrmSqlV1beta1SQLInstanceStatusServerCaCert {
    /**
    * The CA Certificate used to connect to the SQL Instance via SSL.
    */
    'cert'?: string;
    /**
    * The CN valid for the CA Cert.
    */
    'commonName'?: string;
    /**
    * Creation time of the CA Cert.
    */
    'createTime'?: string;
    /**
    * Expiration time of the CA Cert.
    */
    'expirationTime'?: string;
    /**
    * SHA Fingerprint of the CA Cert.
    */
    'sha1Fingerprint'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cert",
            "baseName": "cert",
            "type": "string"
        },
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string"
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "string"
        },
        {
            "name": "expirationTime",
            "baseName": "expirationTime",
            "type": "string"
        },
        {
            "name": "sha1Fingerprint",
            "baseName": "sha1Fingerprint",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLInstanceStatusServerCaCert.attributeTypeMap;
    }
}

