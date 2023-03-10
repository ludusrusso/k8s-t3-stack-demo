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
import { ComGoogleCloudCnrmSqlV1beta1SQLDatabaseSpecInstanceRef } from './comGoogleCloudCnrmSqlV1beta1SQLDatabaseSpecInstanceRef';

export class ComGoogleCloudCnrmSqlV1beta1SQLSSLCertSpec {
    /**
    * Immutable. The common name to be used in the certificate to identify the client. Constrained to [a-zA-Z.-_ ]+. Changing this forces a new resource to be created.
    */
    'commonName': string;
    'instanceRef': ComGoogleCloudCnrmSqlV1beta1SQLDatabaseSpecInstanceRef;
    /**
    * Immutable. Optional. The service-generated sha1Fingerprint of the resource. Used for acquisition only. Leave unset to create a new resource.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string"
        },
        {
            "name": "instanceRef",
            "baseName": "instanceRef",
            "type": "ComGoogleCloudCnrmSqlV1beta1SQLDatabaseSpecInstanceRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLSSLCertSpec.attributeTypeMap;
    }
}

