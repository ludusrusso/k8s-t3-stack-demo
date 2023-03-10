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

export class ComGoogleCloudCnrmFirestoreV1beta1FirestoreIndexSpecFieldsInner {
    /**
    * Immutable. Indicates that this field supports operations on arrayValues. Only one of \'order\' and \'arrayConfig\' can be specified. Possible values: [\"CONTAINS\"].
    */
    'arrayConfig'?: string;
    /**
    * Immutable. Name of the field.
    */
    'fieldPath'?: string;
    /**
    * Immutable. Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. Only one of \'order\' and \'arrayConfig\' can be specified. Possible values: [\"ASCENDING\", \"DESCENDING\"].
    */
    'order'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arrayConfig",
            "baseName": "arrayConfig",
            "type": "string"
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmFirestoreV1beta1FirestoreIndexSpecFieldsInner.attributeTypeMap;
    }
}

