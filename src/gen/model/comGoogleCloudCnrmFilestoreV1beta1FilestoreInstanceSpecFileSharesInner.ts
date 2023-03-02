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
import { ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner } from './comGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner';
import { ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerSourceBackupRef } from './comGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerSourceBackupRef';

export class ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner {
    /**
    * File share capacity in gigabytes (GB). Cloud Filestore defines 1 GB as 1024^3 bytes.
    */
    'capacityGb'?: number;
    /**
    * The name of the file share (must be 16 characters or less).
    */
    'name'?: string;
    /**
    * Nfs Export Options. There is a limit of 10 export options per file share.
    */
    'nfsExportOptions'?: Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner>;
    'sourceBackupRef'?: ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerSourceBackupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capacityGb",
            "baseName": "capacityGb",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nfsExportOptions",
            "baseName": "nfsExportOptions",
            "type": "Array<ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerNfsExportOptionsInner>"
        },
        {
            "name": "sourceBackupRef",
            "baseName": "sourceBackupRef",
            "type": "ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInnerSourceBackupRef"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmFilestoreV1beta1FilestoreInstanceSpecFileSharesInner.attributeTypeMap;
    }
}

