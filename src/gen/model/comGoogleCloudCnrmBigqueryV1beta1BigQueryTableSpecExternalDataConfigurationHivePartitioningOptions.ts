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
* When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationHivePartitioningOptions {
    /**
    * When set, what mode of hive partitioning to use when reading data.
    */
    'mode'?: string;
    /**
    * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
    */
    'requirePartitionFilter'?: boolean;
    /**
    * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
    */
    'sourceUriPrefix'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "requirePartitionFilter",
            "baseName": "requirePartitionFilter",
            "type": "boolean"
        },
        {
            "name": "sourceUriPrefix",
            "baseName": "sourceUriPrefix",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationHivePartitioningOptions.attributeTypeMap;
    }
}

