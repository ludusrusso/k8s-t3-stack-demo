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
import { IoK8sApiDiscoveryV1beta1ForZone } from './ioK8sApiDiscoveryV1beta1ForZone';

/**
* EndpointHints provides hints describing how an endpoint should be consumed.
*/
export class IoK8sApiDiscoveryV1beta1EndpointHints {
    /**
    * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing. May contain a maximum of 8 entries.
    */
    'forZones'?: Array<IoK8sApiDiscoveryV1beta1ForZone>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "forZones",
            "baseName": "forZones",
            "type": "Array<IoK8sApiDiscoveryV1beta1ForZone>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiDiscoveryV1beta1EndpointHints.attributeTypeMap;
    }
}
