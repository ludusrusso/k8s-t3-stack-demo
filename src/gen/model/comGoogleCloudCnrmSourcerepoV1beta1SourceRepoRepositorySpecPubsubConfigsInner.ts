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
import { ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerServiceAccountRef } from './comGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerServiceAccountRef';
import { ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerTopicRef } from './comGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerTopicRef';

export class ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInner {
    /**
    * The format of the Cloud Pub/Sub messages.  - PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent. - JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: [\"PROTOBUF\", \"JSON\"].
    */
    'messageFormat': string;
    'serviceAccountRef'?: ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerServiceAccountRef;
    'topicRef': ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerTopicRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageFormat",
            "baseName": "messageFormat",
            "type": "string"
        },
        {
            "name": "serviceAccountRef",
            "baseName": "serviceAccountRef",
            "type": "ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerServiceAccountRef"
        },
        {
            "name": "topicRef",
            "baseName": "topicRef",
            "type": "ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInnerTopicRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSourcerepoV1beta1SourceRepoRepositorySpecPubsubConfigsInner.attributeTypeMap;
    }
}

