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
import { ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransportPubsub } from './comGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransportPubsub';

export class ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransport {
    'pubsub'?: ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransportPubsub;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pubsub",
            "baseName": "pubsub",
            "type": "ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransportPubsub"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerStatusTransport.attributeTypeMap;
    }
}

