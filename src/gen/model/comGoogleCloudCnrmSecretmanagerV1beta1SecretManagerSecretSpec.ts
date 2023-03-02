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
import { ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecReplication } from './comGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecReplication';
import { ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecRotation } from './comGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecRotation';
import { ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecTopicsInner } from './comGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecTopicsInner';

export class ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpec {
    /**
    * Timestamp in UTC when the Secret is scheduled to expire. This is always provided on output, regardless of what was sent on input. A timestamp in RFC3339 UTC \"Zulu\" format, with nanosecond resolution and up to nine fractional digits. Examples: \"2014-10-02T15:01:23Z\" and \"2014-10-02T15:01:23.045123456Z\".
    */
    'expireTime'?: string;
    'replication': ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecReplication;
    /**
    * Immutable. Optional. The secretId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'rotation'?: ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecRotation;
    /**
    * A list of up to 10 Pub/Sub topics to which messages are published when control plane operations are called on the secret or its versions.
    */
    'topics'?: Array<ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecTopicsInner>;
    /**
    * Immutable. The TTL for the Secret. A duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: \"3.5s\".
    */
    'ttl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "string"
        },
        {
            "name": "replication",
            "baseName": "replication",
            "type": "ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecReplication"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "rotation",
            "baseName": "rotation",
            "type": "ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecRotation"
        },
        {
            "name": "topics",
            "baseName": "topics",
            "type": "Array<ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpecTopicsInner>"
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSecretmanagerV1beta1SecretManagerSecretSpec.attributeTypeMap;
    }
}

