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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef';

export class ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryNamespaceSpec {
    /**
    * The location for the Namespace. A full list of valid locations can be found by running \'gcloud beta service-directory locations list\'.
    */
    'location': string;
    'projectRef': ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef;
    /**
    * Immutable. Optional. The namespaceId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmServicedirectoryV1beta1ServiceDirectoryNamespaceSpec.attributeTypeMap;
    }
}
