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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInner } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInner';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpec {
    /**
    * Immutable. Optional. Timeout duration for the DAG of jobs, expressed in seconds (see [JSON representation of duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). The timeout duration must be from 10 minutes (\"600s\") to 24 hours (\"86400s\"). The timer begins when the first job is submitted. If the workflow is running at the end of the timeout period, any remaining jobs are cancelled, the workflow is ended, and if the workflow was running on a [managed cluster](/dataproc/docs/concepts/workflows/using-workflows#configuring_or_selecting_a_cluster), the cluster is deleted.
    */
    'dagTimeout'?: string;
    /**
    * Immutable. Required. The Directed Acyclic Graph of Jobs to submit.
    */
    'jobs': Array<ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner>;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    /**
    * Immutable. Optional. Template parameters whose values are substituted into the template. Values for parameters must be provided when the template is instantiated.
    */
    'parameters'?: Array<ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInner>;
    'placement': ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement;
    'projectRef'?: ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dagTimeout",
            "baseName": "dagTimeout",
            "type": "string"
        },
        {
            "name": "jobs",
            "baseName": "jobs",
            "type": "Array<ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInner>"
        },
        {
            "name": "placement",
            "baseName": "placement",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement"
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
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpec.attributeTypeMap;
    }
}

