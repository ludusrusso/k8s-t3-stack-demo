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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJobLoggingConfig } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJobLoggingConfig';

/**
* Immutable. Optional. Job is a SparkR job.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob {
    /**
    * Immutable. Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
    */
    'archiveUris'?: Array<string>;
    /**
    * Immutable. Optional. The arguments to pass to the driver. Do not include arguments, such as `--conf`, that can be set as job properties, since a collision may occur that causes an incorrect job submission.
    */
    'args'?: Array<string>;
    /**
    * Immutable. Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.
    */
    'fileUris'?: Array<string>;
    'loggingConfig'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJobLoggingConfig;
    /**
    * Immutable. Required. The HCFS URI of the main R file to use as the driver. Must be a .R file.
    */
    'mainRFileUri': string;
    /**
    * Immutable. Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
    */
    'properties'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archiveUris",
            "baseName": "archiveUris",
            "type": "Array<string>"
        },
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>"
        },
        {
            "name": "fileUris",
            "baseName": "fileUris",
            "type": "Array<string>"
        },
        {
            "name": "loggingConfig",
            "baseName": "loggingConfig",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHadoopJobLoggingConfig"
        },
        {
            "name": "mainRFileUri",
            "baseName": "mainRFileUri",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerSparkRJob.attributeTypeMap;
    }
}
