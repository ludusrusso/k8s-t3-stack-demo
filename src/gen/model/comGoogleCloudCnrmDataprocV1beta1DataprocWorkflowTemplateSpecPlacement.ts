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
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementClusterSelector } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementClusterSelector';
import { ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedCluster } from './comGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedCluster';

/**
* Immutable. Required. WorkflowTemplate scheduling information.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement {
    'clusterSelector'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementClusterSelector;
    'managedCluster'?: ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedCluster;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterSelector",
            "baseName": "clusterSelector",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementClusterSelector"
        },
        {
            "name": "managedCluster",
            "baseName": "managedCluster",
            "type": "ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacementManagedCluster"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecPlacement.attributeTypeMap;
    }
}

