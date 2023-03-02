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
* ConsumerProject is the consumer project and project level configuration
*/
export class IoGkeNetworkingV1ServiceAttachmentSpecConsumerAllowListInner {
    /**
    * ConnectionLimit is the connection limit for this Consumer project
    */
    'connectionLimit'?: number;
    /**
    * ForceSendFields is a list of field names (e.g. \"ConnectionLimit\") to unconditionally include in API requests. By default, fields with empty values are omitted from API requests. However, any non-pointer, non-interface field appearing in ForceSendFields will be sent to the server regardless of whether the field is empty or not. This may be used to include empty fields in Patch requests.
    */
    'forceSendFields'?: Array<string>;
    /**
    * NullFields is a list of field names (e.g. \"ConnectionLimit\") to include in API requests with the JSON null value. By default, fields with empty values are omitted from API requests. However, any field with an empty value appearing in NullFields will be sent to the server as null. It is an error if a field in this list has a non-empty value. This may be used to include null fields in Patch requests.
    */
    'nullFields'?: Array<string>;
    /**
    * Project is the project id or number for the project to set the limit for.
    */
    'project'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "connectionLimit",
            "baseName": "connectionLimit",
            "type": "number"
        },
        {
            "name": "forceSendFields",
            "baseName": "forceSendFields",
            "type": "Array<string>"
        },
        {
            "name": "nullFields",
            "baseName": "nullFields",
            "type": "Array<string>"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeNetworkingV1ServiceAttachmentSpecConsumerAllowListInner.attributeTypeMap;
    }
}
