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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecDestination } from './comGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecDestination';
import { ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecMatchingCriteriaInner } from './comGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecMatchingCriteriaInner';
import { ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecServiceAccountRef } from './comGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecServiceAccountRef';
import { ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecTransport } from './comGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecTransport';

export class ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpec {
    'destination': ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecDestination;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    /**
    * Required. null The list of filters that applies to event attributes. Only events that match all the provided filters will be sent to the destination.
    */
    'matchingCriteria': Array<ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecMatchingCriteriaInner>;
    'projectRef': ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'serviceAccountRef'?: ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecServiceAccountRef;
    'transport'?: ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecTransport;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "destination",
            "baseName": "destination",
            "type": "ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecDestination"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "matchingCriteria",
            "baseName": "matchingCriteria",
            "type": "Array<ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecMatchingCriteriaInner>"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "serviceAccountRef",
            "baseName": "serviceAccountRef",
            "type": "ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecServiceAccountRef"
        },
        {
            "name": "transport",
            "baseName": "transport",
            "type": "ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpecTransport"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmEventarcV1beta1EventarcTriggerSpec.attributeTypeMap;
    }
}

