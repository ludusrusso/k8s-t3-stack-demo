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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacementManagedCluster } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacementManagedCluster';

export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacement {
    'managedCluster'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacementManagedCluster;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "managedCluster",
            "baseName": "managedCluster",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacementManagedCluster"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateStatusPlacement.attributeTypeMap;
    }
}

