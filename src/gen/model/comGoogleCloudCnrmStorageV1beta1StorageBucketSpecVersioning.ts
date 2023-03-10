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

/**
* The bucket\'s Versioning configuration.
*/
export class ComGoogleCloudCnrmStorageV1beta1StorageBucketSpecVersioning {
    /**
    * While set to true, versioning is fully enabled for this bucket.
    */
    'enabled': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmStorageV1beta1StorageBucketSpecVersioning.attributeTypeMap;
    }
}

