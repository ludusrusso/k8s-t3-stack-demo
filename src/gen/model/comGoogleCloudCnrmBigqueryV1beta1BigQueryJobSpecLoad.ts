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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationEncryptionConfiguration } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationEncryptionConfiguration';
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadDestinationTable } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadDestinationTable';
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadTimePartitioning } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadTimePartitioning';

/**
* Immutable. Configures a load job.
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoad {
    /**
    * Immutable. Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
    */
    'allowJaggedRows'?: boolean;
    /**
    * Immutable. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
    */
    'allowQuotedNewlines'?: boolean;
    /**
    * Immutable. Indicates if we should automatically infer the options and schema for CSV and JSON sources.
    */
    'autodetect'?: boolean;
    /**
    * Immutable. Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a \'notFound\' error is returned in the job result. Creation, truncation and append actions occur as one atomic update upon job completion Default value: \"CREATE_NEVER\" Possible values: [\"CREATE_IF_NEEDED\", \"CREATE_NEVER\"].
    */
    'createDisposition'?: string;
    'destinationEncryptionConfiguration'?: ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationEncryptionConfiguration;
    'destinationTable': ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadDestinationTable;
    /**
    * Immutable. The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
    */
    'encoding'?: string;
    /**
    * Immutable. The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence \"\\t\" to specify a tab separator. The default value is a comma (\',\').
    */
    'fieldDelimiter'?: string;
    /**
    * Immutable. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don\'t match any column names.
    */
    'ignoreUnknownValues'?: boolean;
    /**
    * Immutable. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
    */
    'maxBadRecords'?: number;
    /**
    * Immutable. Specifies a string that represents a null value in a CSV file. For example, if you specify \"\\N\", BigQuery interprets \"\\N\" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
    */
    'nullMarker'?: string;
    /**
    * Immutable. If sourceFormat is set to \"DATASTORE_BACKUP\", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn\'t found in the Cloud Datastore backup, an invalid error is returned in the job result.
    */
    'projectionFields'?: Array<string>;
    /**
    * Immutable. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote (\'\"\'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
    */
    'quote'?: string;
    /**
    * Immutable. Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
    */
    'schemaUpdateOptions'?: Array<string>;
    /**
    * Immutable. The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
    */
    'skipLeadingRows'?: number;
    /**
    * Immutable. The format of the data files. For CSV files, specify \"CSV\". For datastore backups, specify \"DATASTORE_BACKUP\". For newline-delimited JSON, specify \"NEWLINE_DELIMITED_JSON\". For Avro, specify \"AVRO\". For parquet, specify \"PARQUET\". For orc, specify \"ORC\". [Beta] For Bigtable, specify \"BIGTABLE\". The default value is CSV.
    */
    'sourceFormat'?: string;
    /**
    * Immutable. The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one \'*\' wildcard character and it must come after the \'bucket\' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the \'*\' wildcard character is not allowed.
    */
    'sourceUris': Array<string>;
    'timePartitioning'?: ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadTimePartitioning;
    /**
    * Immutable. Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a \'duplicate\' error is returned in the job result. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. Default value: \"WRITE_EMPTY\" Possible values: [\"WRITE_TRUNCATE\", \"WRITE_APPEND\", \"WRITE_EMPTY\"].
    */
    'writeDisposition'?: string;

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
            "name": "autodetect",
            "baseName": "autodetect",
            "type": "boolean"
        },
        {
            "name": "createDisposition",
            "baseName": "createDisposition",
            "type": "string"
        },
        {
            "name": "destinationEncryptionConfiguration",
            "baseName": "destinationEncryptionConfiguration",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationEncryptionConfiguration"
        },
        {
            "name": "destinationTable",
            "baseName": "destinationTable",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadDestinationTable"
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
            "name": "ignoreUnknownValues",
            "baseName": "ignoreUnknownValues",
            "type": "boolean"
        },
        {
            "name": "maxBadRecords",
            "baseName": "maxBadRecords",
            "type": "number"
        },
        {
            "name": "nullMarker",
            "baseName": "nullMarker",
            "type": "string"
        },
        {
            "name": "projectionFields",
            "baseName": "projectionFields",
            "type": "Array<string>"
        },
        {
            "name": "quote",
            "baseName": "quote",
            "type": "string"
        },
        {
            "name": "schemaUpdateOptions",
            "baseName": "schemaUpdateOptions",
            "type": "Array<string>"
        },
        {
            "name": "skipLeadingRows",
            "baseName": "skipLeadingRows",
            "type": "number"
        },
        {
            "name": "sourceFormat",
            "baseName": "sourceFormat",
            "type": "string"
        },
        {
            "name": "sourceUris",
            "baseName": "sourceUris",
            "type": "Array<string>"
        },
        {
            "name": "timePartitioning",
            "baseName": "timePartitioning",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoadTimePartitioning"
        },
        {
            "name": "writeDisposition",
            "baseName": "writeDisposition",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecLoad.attributeTypeMap;
    }
}
