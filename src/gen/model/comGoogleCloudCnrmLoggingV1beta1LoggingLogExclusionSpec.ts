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
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecBillingAccountRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecBillingAccountRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecFolderRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecFolderRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecOrganizationRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecOrganizationRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecProjectRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecProjectRef';

export class ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpec {
    'billingAccountRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecBillingAccountRef;
    /**
    * Optional. A description of this exclusion.
    */
    'description'?: string;
    /**
    * Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field.
    */
    'disabled'?: boolean;
    /**
    * Required. An (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries. For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets: `\"resource.type=gcs_bucket severity
    */
    'filter': string;
    'folderRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecFolderRef;
    'organizationRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecOrganizationRef;
    'projectRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAccountRef",
            "baseName": "billingAccountRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecBillingAccountRef"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "folderRef",
            "baseName": "folderRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecFolderRef"
        },
        {
            "name": "organizationRef",
            "baseName": "organizationRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecOrganizationRef"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmLoggingV1beta1LoggingLogExclusionSpec.attributeTypeMap;
    }
}
