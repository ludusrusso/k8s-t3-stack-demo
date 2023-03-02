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
* The resource that is being migrated. The migrator sends requests to the endpoint serving the resource. Immutable.
*/
export class IoK8sMigrationV1alpha1StorageVersionMigrationSpecResource {
    /**
    * The name of the group.
    */
    'group'?: string;
    /**
    * The name of the resource.
    */
    'resource'?: string;
    /**
    * The name of the version.
    */
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sMigrationV1alpha1StorageVersionMigrationSpecResource.attributeTypeMap;
    }
}

