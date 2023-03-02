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
import { ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecMasterInstanceRef } from './comGoogleCloudCnrmSqlV1beta1SQLInstanceSpecMasterInstanceRef';
import { ComGoogleCloudCnrmSqlV1beta1SQLUserSpecPassword } from './comGoogleCloudCnrmSqlV1beta1SQLUserSpecPassword';

export class ComGoogleCloudCnrmSqlV1beta1SQLUserSpec {
    /**
    * Immutable. The host the user can connect from. This is only supported for MySQL instances. Don\'t set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created.
    */
    'host'?: string;
    'instanceRef': ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecMasterInstanceRef;
    'password'?: ComGoogleCloudCnrmSqlV1beta1SQLUserSpecPassword;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. The user type. It determines the method to authenticate the user during login.                 The default is the database\'s built-in user type. Flags include \"BUILT_IN\", \"CLOUD_IAM_USER\", or \"CLOUD_IAM_SERVICE_ACCOUNT\".
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "instanceRef",
            "baseName": "instanceRef",
            "type": "ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecMasterInstanceRef"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "ComGoogleCloudCnrmSqlV1beta1SQLUserSpecPassword"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLUserSpec.attributeTypeMap;
    }
}

