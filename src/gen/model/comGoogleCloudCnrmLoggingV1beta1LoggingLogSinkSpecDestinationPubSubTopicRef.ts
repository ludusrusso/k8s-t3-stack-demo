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

export class ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestinationPubSubTopicRef {
    /**
    * Allowed value: string of the format `pubsub.googleapis.com/projects/{{project}}/topics/{{value}}`, where {{value}} is the `name` field of a `PubSubTopic` resource.
    */
    'external'?: string;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name'?: string;
    /**
    * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "external",
            "baseName": "external",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestinationPubSubTopicRef.attributeTypeMap;
    }
}

