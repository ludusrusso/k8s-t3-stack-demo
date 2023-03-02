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

export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecQueryUserDefinedFunctionResourcesInner {
    /**
    * Immutable. An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
    */
    'inlineCode'?: string;
    /**
    * Immutable. A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
    */
    'resourceUri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inlineCode",
            "baseName": "inlineCode",
            "type": "string"
        },
        {
            "name": "resourceUri",
            "baseName": "resourceUri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecQueryUserDefinedFunctionResourcesInner.attributeTypeMap;
    }
}

