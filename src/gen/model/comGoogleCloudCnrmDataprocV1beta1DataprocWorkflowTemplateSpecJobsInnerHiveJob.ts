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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJobQueryList } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJobQueryList';

/**
* Immutable. Optional. Job is a Hive job.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob {
    /**
    * Immutable. Optional. Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
    */
    'continueOnFailure'?: boolean;
    /**
    * Immutable. Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
    */
    'jarFileUris'?: Array<string>;
    /**
    * Immutable. Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/_*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
    */
    'properties'?: { [key: string]: string; };
    /**
    * Immutable. The HCFS URI of the script that contains Hive queries.
    */
    'queryFileUri'?: string;
    'queryList'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJobQueryList;
    /**
    * Immutable. Optional. Mapping of query variable names to values (equivalent to the Hive command: `SET name=\"value\";`).
    */
    'scriptVariables'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "continueOnFailure",
            "baseName": "continueOnFailure",
            "type": "boolean"
        },
        {
            "name": "jarFileUris",
            "baseName": "jarFileUris",
            "type": "Array<string>"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "queryFileUri",
            "baseName": "queryFileUri",
            "type": "string"
        },
        {
            "name": "queryList",
            "baseName": "queryList",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJobQueryList"
        },
        {
            "name": "scriptVariables",
            "baseName": "scriptVariables",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecJobsInnerHiveJob.attributeTypeMap;
    }
}

