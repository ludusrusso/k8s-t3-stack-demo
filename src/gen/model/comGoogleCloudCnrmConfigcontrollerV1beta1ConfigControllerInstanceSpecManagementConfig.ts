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
import { ComGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfigStandardManagementConfig } from './comGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfigStandardManagementConfig';

/**
* Immutable. Configuration of the cluster management
*/
export class ComGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfig {
    'standardManagementConfig': ComGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfigStandardManagementConfig;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "standardManagementConfig",
            "baseName": "standardManagementConfig",
            "type": "ComGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfigStandardManagementConfig"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmConfigcontrollerV1beta1ConfigControllerInstanceSpecManagementConfig.attributeTypeMap;
    }
}

