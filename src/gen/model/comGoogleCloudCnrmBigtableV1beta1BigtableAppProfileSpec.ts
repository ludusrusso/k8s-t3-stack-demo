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
import { ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecInstanceRef } from './comGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecInstanceRef';
import { ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting } from './comGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting';

export class ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpec {
    /**
    * Long form description of the use case for this app profile.
    */
    'description'?: string;
    'instanceRef'?: ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecInstanceRef;
    /**
    * The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
    */
    'multiClusterRoutingClusterIds'?: Array<string>;
    /**
    * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.
    */
    'multiClusterRoutingUseAny'?: boolean;
    /**
    * Immutable. Optional. The appProfileId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'singleClusterRouting'?: ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "instanceRef",
            "baseName": "instanceRef",
            "type": "ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecInstanceRef"
        },
        {
            "name": "multiClusterRoutingClusterIds",
            "baseName": "multiClusterRoutingClusterIds",
            "type": "Array<string>"
        },
        {
            "name": "multiClusterRoutingUseAny",
            "baseName": "multiClusterRoutingUseAny",
            "type": "boolean"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "singleClusterRouting",
            "baseName": "singleClusterRouting",
            "type": "ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpecSingleClusterRouting"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigtableV1beta1BigtableAppProfileSpec.attributeTypeMap;
    }
}

