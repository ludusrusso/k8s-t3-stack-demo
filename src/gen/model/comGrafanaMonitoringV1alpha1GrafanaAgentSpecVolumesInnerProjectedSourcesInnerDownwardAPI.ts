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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInner';

/**
* information about the downwardAPI data to project
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjectedSourcesInnerDownwardAPI {
    /**
    * Items is a list of DownwardAPIVolume file
    */
    'items'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerDownwardAPIItemsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerProjectedSourcesInnerDownwardAPI.attributeTypeMap;
    }
}

