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

export class ComGoogleCloudCnrmPubsubV1beta1PubSubSchemaSpec {
    /**
    * Immutable. The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in type.
    */
    'definition'?: string;
    'projectRef': ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. The type of the schema definition Default value: \"TYPE_UNSPECIFIED\" Possible values: [\"TYPE_UNSPECIFIED\", \"PROTOCOL_BUFFER\", \"AVRO\"].
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "definition",
            "baseName": "definition",
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
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPubsubV1beta1PubSubSchemaSpec.attributeTypeMap;
    }
}
