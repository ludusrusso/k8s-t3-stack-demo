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
import { ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource } from './comGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource';

export class ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInner {
    /**
    * Required. Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
    */
    'name': string;
    /**
    * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\", and the maximum length is 32768 bytes.
    */
    'value'?: string;
    'valueSource'?: ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "valueSource",
            "baseName": "valueSource",
            "type": "ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInnerValueSource"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateContainersInnerEnvInner.attributeTypeMap;
    }
}

