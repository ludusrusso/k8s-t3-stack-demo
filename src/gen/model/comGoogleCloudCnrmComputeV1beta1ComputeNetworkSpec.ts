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

export class ComGoogleCloudCnrmComputeV1beta1ComputeNetworkSpec {
    /**
    * Immutable. When set to \'true\', the network is created in \"auto subnet mode\" and it will create a subnet for each region automatically across the \'10.128.0.0/9\' address range.  When set to \'false\', the network is created in \"custom subnet mode\" so the user can explicitly connect subnetwork resources.
    */
    'autoCreateSubnetworks'?: boolean;
    'deleteDefaultRoutesOnCreate'?: boolean;
    /**
    * Immutable. An optional description of this resource. The resource must be recreated to modify this field.
    */
    'description'?: string;
    /**
    * Immutable. Maximum Transmission Unit in bytes. The minimum value for this field is 1460 and the maximum value is 1500 bytes.
    */
    'mtu'?: number;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * The network-wide routing mode to use. If set to \'REGIONAL\', this network\'s cloud routers will only advertise routes with subnetworks of this network in the same region as the router. If set to \'GLOBAL\', this network\'s cloud routers will advertise routes with all subnetworks of this network, across regions. Possible values: [\"REGIONAL\", \"GLOBAL\"].
    */
    'routingMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "autoCreateSubnetworks",
            "baseName": "autoCreateSubnetworks",
            "type": "boolean"
        },
        {
            "name": "deleteDefaultRoutesOnCreate",
            "baseName": "deleteDefaultRoutesOnCreate",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "mtu",
            "baseName": "mtu",
            "type": "number"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "routingMode",
            "baseName": "routingMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeNetworkSpec.attributeTypeMap;
    }
}

