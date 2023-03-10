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
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecBillingAccountRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecBillingAccountRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecFolderRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecFolderRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecOrganizationRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecOrganizationRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecProjectRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecProjectRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpecBucketRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpecBucketRef';

export class ComGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpec {
    'billingAccountRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecBillingAccountRef;
    'bucketRef': ComGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpecBucketRef;
    /**
    * Describes this view.
    */
    'description'?: string;
    /**
    * Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE(\"projects/myproject\") AND resource.type = \"gce_instance\" AND LOG_ID(\"stdout\")
    */
    'filter'?: string;
    'folderRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecFolderRef;
    /**
    * Immutable. The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.
    */
    'location'?: string;
    'organizationRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecOrganizationRef;
    'projectRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAccountRef",
            "baseName": "billingAccountRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecBillingAccountRef"
        },
        {
            "name": "bucketRef",
            "baseName": "bucketRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpecBucketRef"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "folderRef",
            "baseName": "folderRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecFolderRef"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "organizationRef",
            "baseName": "organizationRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecOrganizationRef"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogBucketSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmLoggingV1beta1LoggingLogViewSpec.attributeTypeMap;
    }
}

