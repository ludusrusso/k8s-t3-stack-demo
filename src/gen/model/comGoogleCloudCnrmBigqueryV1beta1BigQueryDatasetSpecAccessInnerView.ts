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
* A view from a different dataset to grant access to. Queries executed against that view will have read access to tables in this dataset. The role field is not required when this field is set. If that view is updated by any user, access to the view needs to be granted again via an update operation.
*/
export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecAccessInnerView {
    /**
    * The ID of the dataset containing this table.
    */
    'datasetId': string;
    /**
    * The ID of the project containing this table.
    */
    'projectId': string;
    /**
    * The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
    */
    'tableId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "datasetId",
            "baseName": "datasetId",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "tableId",
            "baseName": "tableId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryDatasetSpecAccessInnerView.attributeTypeMap;
    }
}

