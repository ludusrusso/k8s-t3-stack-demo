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
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile {
    /**
    * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    /**
    * the name of secret that contains Azure Storage Account Name and Key
    */
    'secretName': string;
    /**
    * Share Name
    */
    'shareName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        },
        {
            "name": "shareName",
            "baseName": "shareName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerAzureFile.attributeTypeMap;
    }
}
