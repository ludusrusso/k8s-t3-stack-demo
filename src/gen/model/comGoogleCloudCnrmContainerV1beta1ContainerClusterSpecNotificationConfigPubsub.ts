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
import { ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsubTopicRef } from './comGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsubTopicRef';

/**
* Notification config for Cloud Pub/Sub.
*/
export class ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsub {
    /**
    * Whether or not the notification config is enabled.
    */
    'enabled': boolean;
    'topicRef'?: ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsubTopicRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "topicRef",
            "baseName": "topicRef",
            "type": "ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsubTopicRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmContainerV1beta1ContainerClusterSpecNotificationConfigPubsub.attributeTypeMap;
    }
}

