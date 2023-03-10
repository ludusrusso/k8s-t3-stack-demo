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
* ContainerMetrics sets resource usage metrics of a container.
*/
export class IoK8sMetricsPkgApisMetricsV1beta1ContainerMetrics {
    /**
    * Container name corresponding to the one from pod.spec.containers.
    */
    'name': string;
    /**
    * The memory usage is the memory working set.
    */
    'usage': { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sMetricsPkgApisMetricsV1beta1ContainerMetrics.attributeTypeMap;
    }
}

