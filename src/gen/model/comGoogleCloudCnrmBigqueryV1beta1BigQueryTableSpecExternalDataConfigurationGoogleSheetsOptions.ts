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
* Additional options if source_format is set to \"GOOGLE_SHEETS\".
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationGoogleSheetsOptions {
    /**
    * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: \"sheet_name!top_left_cell_id:bottom_right_cell_id\" For example: \"sheet1!A1:B20\".
    */
    'range'?: string;
    /**
    * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
    */
    'skipLeadingRows'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "range",
            "baseName": "range",
            "type": "string"
        },
        {
            "name": "skipLeadingRows",
            "baseName": "skipLeadingRows",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryTableSpecExternalDataConfigurationGoogleSheetsOptions.attributeTypeMap;
    }
}
