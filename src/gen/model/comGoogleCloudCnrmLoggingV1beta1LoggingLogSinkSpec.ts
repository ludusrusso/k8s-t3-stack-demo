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
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecBigqueryOptions } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecBigqueryOptions';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestination } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestination';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecExclusionsInner } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecExclusionsInner';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecFolderRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecFolderRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecOrganizationRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecOrganizationRef';
import { ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecProjectRef } from './comGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecProjectRef';

export class ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpec {
    'bigqueryOptions'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecBigqueryOptions;
    /**
    * A description of this sink. The maximum length of the description is 8000 characters.
    */
    'description'?: string;
    'destination': ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestination;
    /**
    * If set to True, then this sink is disabled and it does not export any log entries.
    */
    'disabled'?: boolean;
    /**
    * Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both filter and one of exclusion_filters it will not be exported.
    */
    'exclusions'?: Array<ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecExclusionsInner>;
    /**
    * The filter to apply when exporting logs. Only log entries that match the filter are exported.
    */
    'filter'?: string;
    'folderRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecFolderRef;
    /**
    * Immutable. Whether or not to include children organizations in the sink export. If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.
    */
    'includeChildren'?: boolean;
    'organizationRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecOrganizationRef;
    'projectRef'?: ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * Immutable. Whether or not to create a unique identity associated with this sink. If false (the default), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true, then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.
    */
    'uniqueWriterIdentity'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bigqueryOptions",
            "baseName": "bigqueryOptions",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecBigqueryOptions"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecDestination"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "exclusions",
            "baseName": "exclusions",
            "type": "Array<ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecExclusionsInner>"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        },
        {
            "name": "folderRef",
            "baseName": "folderRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecFolderRef"
        },
        {
            "name": "includeChildren",
            "baseName": "includeChildren",
            "type": "boolean"
        },
        {
            "name": "organizationRef",
            "baseName": "organizationRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecOrganizationRef"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "uniqueWriterIdentity",
            "baseName": "uniqueWriterIdentity",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmLoggingV1beta1LoggingLogSinkSpec.attributeTypeMap;
    }
}

