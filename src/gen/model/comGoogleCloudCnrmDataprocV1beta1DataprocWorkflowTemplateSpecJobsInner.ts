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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPigJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPigJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPrestoJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPrestoJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPysparkJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPysparkJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerScheduling } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerScheduling';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkSqlJob } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkSqlJob';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner {
    'hadoopJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJob;
    'hiveJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob;
    /**
    * Immutable. Optional. The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: p{Ll}p{Lo}{0,62} Label values must be between 1 and 63 characters long, and must conform to the following regular expression: [p{Ll}p{Lo}p{N}_-]{0,63} No more than 32 labels can be associated with a given job.
    */
    'labels'?: { [key: string]: string; };
    'pigJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPigJob;
    /**
    * Immutable. Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
    */
    'prerequisiteStepIds'?: Array<string>;
    'prestoJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPrestoJob;
    'pysparkJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPysparkJob;
    'scheduling'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerScheduling;
    'sparkJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkJob;
    'sparkRJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob;
    'sparkSqlJob'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkSqlJob;
    /**
    * Immutable. Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in prerequisiteStepIds field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
    */
    'stepId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hadoopJob",
            "baseName": "hadoopJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJob"
        },
        {
            "name": "hiveJob",
            "baseName": "hiveJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "pigJob",
            "baseName": "pigJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPigJob"
        },
        {
            "name": "prerequisiteStepIds",
            "baseName": "prerequisiteStepIds",
            "type": "Array<string>"
        },
        {
            "name": "prestoJob",
            "baseName": "prestoJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPrestoJob"
        },
        {
            "name": "pysparkJob",
            "baseName": "pysparkJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerPysparkJob"
        },
        {
            "name": "scheduling",
            "baseName": "scheduling",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerScheduling"
        },
        {
            "name": "sparkJob",
            "baseName": "sparkJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkJob"
        },
        {
            "name": "sparkRJob",
            "baseName": "sparkRJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob"
        },
        {
            "name": "sparkSqlJob",
            "baseName": "sparkSqlJob",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkSqlJob"
        },
        {
            "name": "stepId",
            "baseName": "stepId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInner.attributeTypeMap;
    }
}
