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

export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedClusterConfigInitializationActionsInner {
    /**
    * Immutable. Required. Cloud Storage URI of executable file.
    */
    'executableFile'?: string;
    /**
    * Immutable. Optional. Amount of time executable has to complete. Default is 10 minutes (see JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json)). Cluster creation fails with an explanatory error message (the name of the executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
    */
    'executionTimeout'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "executableFile",
            "baseName": "executableFile",
            "type": "string"
        },
        {
            "name": "executionTimeout",
            "baseName": "executionTimeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedClusterConfigInitializationActionsInner.attributeTypeMap;
    }
}
