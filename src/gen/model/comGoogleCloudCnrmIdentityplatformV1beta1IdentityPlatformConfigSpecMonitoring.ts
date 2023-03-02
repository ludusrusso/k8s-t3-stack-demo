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
import { ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoringRequestLogging } from './comGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoringRequestLogging';

/**
* Configuration related to monitoring project activity.
*/
export class ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring {
    'requestLogging'?: ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoringRequestLogging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestLogging",
            "baseName": "requestLogging",
            "type": "ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoringRequestLogging"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIdentityplatformV1beta1IdentityPlatformConfigSpecMonitoring.attributeTypeMap;
    }
}
