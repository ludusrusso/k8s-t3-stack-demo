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
import { ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMapItemsInner } from './comGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMapItemsInner';

/**
* Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
*/
export class ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret {
    /**
    * Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    */
    'defaultMode'?: number;
    /**
    * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
    */
    'items'?: Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMapItemsInner>;
    /**
    * Specify whether the Secret or its keys must be defined
    */
    'optional'?: boolean;
    /**
    * Name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
    */
    'secretName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultMode",
            "baseName": "defaultMode",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerConfigMapItemsInner>"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGrafanaMonitoringV1alpha1GrafanaAgentSpecVolumesInnerSecret.attributeTypeMap;
    }
}

