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
import { ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationTableTableRef } from './comGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationTableTableRef';

export class ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopySourceTablesInner {
    'tableRef': ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationTableTableRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tableRef",
            "baseName": "tableRef",
            "type": "ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopyDestinationTableTableRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigqueryV1beta1BigQueryJobSpecCopySourceTablesInner.attributeTypeMap;
    }
}
