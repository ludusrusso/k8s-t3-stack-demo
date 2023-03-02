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
import { IoFluxcdToolkitNotificationV1beta1AlertSpecEventSourcesInner } from './ioFluxcdToolkitNotificationV1beta1AlertSpecEventSourcesInner';
import { IoFluxcdToolkitNotificationV1beta1ReceiverSpecSecretRef } from './ioFluxcdToolkitNotificationV1beta1ReceiverSpecSecretRef';

/**
* ReceiverSpec defines the desired state of Receiver
*/
export class IoFluxcdToolkitNotificationV1beta1ReceiverSpec {
    /**
    * A list of events to handle, e.g. \'push\' for GitHub or \'Push Hook\' for GitLab.
    */
    'events'?: Array<string>;
    /**
    * A list of resources to be notified about changes.
    */
    'resources': Array<IoFluxcdToolkitNotificationV1beta1AlertSpecEventSourcesInner>;
    'secretRef'?: IoFluxcdToolkitNotificationV1beta1ReceiverSpecSecretRef;
    /**
    * This flag tells the controller to suspend subsequent events handling. Defaults to false.
    */
    'suspend'?: boolean;
    /**
    * Type of webhook sender, used to determine the validation procedure and payload deserialization.
    */
    'type': IoFluxcdToolkitNotificationV1beta1ReceiverSpec.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<string>"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<IoFluxcdToolkitNotificationV1beta1AlertSpecEventSourcesInner>"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoFluxcdToolkitNotificationV1beta1ReceiverSpecSecretRef"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IoFluxcdToolkitNotificationV1beta1ReceiverSpec.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitNotificationV1beta1ReceiverSpec.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitNotificationV1beta1ReceiverSpec {
    export enum TypeEnum {
        Generic = <any> 'generic',
        GenericHmac = <any> 'generic-hmac',
        Github = <any> 'github',
        Gitlab = <any> 'gitlab',
        Bitbucket = <any> 'bitbucket',
        Harbor = <any> 'harbor',
        Dockerhub = <any> 'dockerhub',
        Quay = <any> 'quay',
        Gcr = <any> 'gcr',
        Nexus = <any> 'nexus',
        Acr = <any> 'acr'
    }
}
