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
* A policy that specifies how Pub/Sub retries message delivery for this subscription.  If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers.  RetryPolicy will be triggered on NACKs or acknowledgement deadline exceeded events for a given message.
*/
export class ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecRetryPolicy {
    /**
    * The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.  A duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: \"3.5s\".
    */
    'maximumBackoff'?: string;
    /**
    * The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds. A duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: \"3.5s\".
    */
    'minimumBackoff'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maximumBackoff",
            "baseName": "maximumBackoff",
            "type": "string"
        },
        {
            "name": "minimumBackoff",
            "baseName": "minimumBackoff",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPubsubV1beta1PubSubSubscriptionSpecRetryPolicy.attributeTypeMap;
    }
}

