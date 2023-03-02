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
import { ComGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecIapOauth2ClientSecretValueFrom } from './comGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecIapOauth2ClientSecretValueFrom';

/**
* Immutable. Initial root password. Required for MS SQL Server, ignored by MySQL and PostgreSQL.
*/
export class ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecRootPassword {
    /**
    * Value of the field. Cannot be used if \'valueFrom\' is specified.
    */
    'value'?: string;
    'valueFrom'?: ComGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecIapOauth2ClientSecretValueFrom;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "valueFrom",
            "baseName": "valueFrom",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeBackendServiceSpecIapOauth2ClientSecretValueFrom"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecRootPassword.attributeTypeMap;
    }
}

