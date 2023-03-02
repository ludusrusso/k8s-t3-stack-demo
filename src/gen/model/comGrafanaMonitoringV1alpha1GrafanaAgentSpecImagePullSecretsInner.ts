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
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecImagePullSecretsInner {
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
    */
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecImagePullSecretsInner.attributeTypeMap;
    }
}
