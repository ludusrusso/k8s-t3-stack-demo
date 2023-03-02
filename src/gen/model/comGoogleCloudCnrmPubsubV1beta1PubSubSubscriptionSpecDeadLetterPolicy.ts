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
import { ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicyDeadLetterTopicRef } from './comGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicyDeadLetterTopicRef';

/**
* A policy that specifies the conditions for dead lettering messages in this subscription. If dead_letter_policy is not set, dead lettering is disabled.  The Cloud Pub/Sub service account associated with this subscription\'s parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.
*/
export class ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicy {
    'deadLetterTopicRef'?: ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicyDeadLetterTopicRef;
    /**
    * The maximum number of delivery attempts for any message. The value must be between 5 and 100.  The number of delivery attempts is defined as 1 + (the sum of number of  NACKs and number of times the acknowledgement deadline has been exceeded for the message).  A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines.  This field will be honored on a best effort basis.  If this parameter is 0, a default value of 5 is used.
    */
    'maxDeliveryAttempts'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deadLetterTopicRef",
            "baseName": "deadLetterTopicRef",
            "type": "ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicyDeadLetterTopicRef"
        },
        {
            "name": "maxDeliveryAttempts",
            "baseName": "maxDeliveryAttempts",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecDeadLetterPolicy.attributeTypeMap;
    }
}

