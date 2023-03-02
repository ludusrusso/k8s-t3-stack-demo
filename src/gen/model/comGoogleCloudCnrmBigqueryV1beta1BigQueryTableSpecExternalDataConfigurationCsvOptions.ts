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
* Additional properties to set if source_format is set to \"CSV\".
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationCsvOptions {
    /**
    * Indicates if BigQuery should accept rows that are missing trailing optional columns.
    */
    'allowJaggedRows'?: boolean;
    /**
    * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
    */
    'allowQuotedNewlines'?: boolean;
    /**
    * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
    */
    'encoding'?: string;
    /**
    * The separator for fields in a CSV file.
    */
    'fieldDelimiter'?: string;
    'quote': string;
    /**
    * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
    */
    'skipLeadingRows'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowJaggedRows",
            "baseName": "allowJaggedRows",
            "type": "boolean"
        },
        {
            "name": "allowQuotedNewlines",
            "baseName": "allowQuotedNewlines",
            "type": "boolean"
        },
        {
            "name": "encoding",
            "baseName": "encoding",
            "type": "string"
        },
        {
            "name": "fieldDelimiter",
            "baseName": "fieldDelimiter",
            "type": "string"
        },
        {
            "name": "quote",
            "baseName": "quote",
            "type": "string"
        },
        {
            "name": "skipLeadingRows",
            "baseName": "skipLeadingRows",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationCsvOptions.attributeTypeMap;
    }
}

