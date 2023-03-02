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
import { ComGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpecClusterInner } from './comGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpecClusterInner';

export class ComGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpec {
    /**
    * A block of cluster configuration options. This can be specified at least once.
    */
    'cluster'?: Array<ComGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpecClusterInner>;
    /**
    * DEPRECATED. This field no longer serves any function and is intended to be dropped in a later version of the resource.
    */
    'deletionProtection'?: boolean;
    /**
    * The human-readable display name of the Bigtable instance. Defaults to the instance name.
    */
    'displayName'?: string;
    /**
    * DEPRECATED. It is recommended to leave this field unspecified since the distinction between \"DEVELOPMENT\" and \"PRODUCTION\" instances is going away, and all instances will become \"PRODUCTION\" instances. This means that new and existing \"DEVELOPMENT\" instances will be converted to \"PRODUCTION\" instances. It is recommended for users to use \"PRODUCTION\" instances in any case, since a 1-node \"PRODUCTION\" instance is functionally identical to a \"DEVELOPMENT\" instance, but without the accompanying restrictions. The instance type to create. One of \"DEVELOPMENT\" or \"PRODUCTION\". Defaults to \"PRODUCTION\".
    */
    'instanceType'?: string;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "Array<ComGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpecClusterInner>"
        },
        {
            "name": "deletionProtection",
            "baseName": "deletionProtection",
            "type": "boolean"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "instanceType",
            "baseName": "instanceType",
            "type": "string"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBigtableV1beta1BigtableInstanceSpec.attributeTypeMap;
    }
}

