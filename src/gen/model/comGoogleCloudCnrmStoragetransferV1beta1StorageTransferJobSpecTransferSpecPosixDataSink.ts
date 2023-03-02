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
* A POSIX filesystem data sink.
*/
export class ComGoogleCloudCnrmStoragetransferV1beta1StorageTransferJobSpecTransferSpecPosixDataSink {
    /**
    * Root directory path to the filesystem.
    */
    'rootDirectory': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rootDirectory",
            "baseName": "rootDirectory",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmStoragetransferV1beta1StorageTransferJobSpecTransferSpecPosixDataSink.attributeTypeMap;
    }
}
