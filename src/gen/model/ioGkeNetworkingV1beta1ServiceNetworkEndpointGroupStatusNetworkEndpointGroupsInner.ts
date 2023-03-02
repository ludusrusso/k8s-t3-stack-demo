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
* NegObjectReference is the object reference to the NEG resource in GCE
*/
export class IoGkeNetworkingV1beta1ServiceNetworkEndpointGroupStatusNetworkEndpointGroupsInner {
    /**
    * The unique identifier for the NEG resource in GCE API.
    */
    'id': string;
    /**
    * NetworkEndpointType: Type of network endpoints in this network endpoint group.
    */
    'networkEndpointType'?: string;
    /**
    * SelfLink is the GCE Server-defined fully-qualified URL for the GCE NEG resource
    */
    'selfLink'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "networkEndpointType",
            "baseName": "networkEndpointType",
            "type": "string"
        },
        {
            "name": "selfLink",
            "baseName": "selfLink",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoGkeNetworkingV1beta1ServiceNetworkEndpointGroupStatusNetworkEndpointGroupsInner.attributeTypeMap;
    }
}

