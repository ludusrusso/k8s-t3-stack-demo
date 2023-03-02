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
import { ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpecNamespaceRef } from './comGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpecNamespaceRef';

export class ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpec {
    'namespaceRef': ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpecNamespaceRef;
    /**
    * Immutable. Optional. The serviceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "namespaceRef",
            "baseName": "namespaceRef",
            "type": "ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpecNamespaceRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryServiceSpec.attributeTypeMap;
    }
}

