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
import { IoK8sApiCoreV1LifecycleHandler } from './ioK8sApiCoreV1LifecycleHandler';

/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
*/
export class IoK8sApiCoreV1Lifecycle {
    'postStart'?: IoK8sApiCoreV1LifecycleHandler;
    'preStop'?: IoK8sApiCoreV1LifecycleHandler;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "postStart",
            "baseName": "postStart",
            "type": "IoK8sApiCoreV1LifecycleHandler"
        },
        {
            "name": "preStop",
            "baseName": "preStop",
            "type": "IoK8sApiCoreV1LifecycleHandler"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Lifecycle.attributeTypeMap;
    }
}

