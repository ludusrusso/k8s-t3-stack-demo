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
import { ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstanceInstancesInner } from './comGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstanceInstancesInner';

/**
* For Cloud SQL volumes, contains the specific instances that should be mounted. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
*/
export class ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstance {
    'instances'?: Array<ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstanceInstancesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstanceInstancesInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRunV1beta1RunServiceSpecTemplateVolumesInnerCloudSqlInstance.attributeTypeMap;
    }
}

