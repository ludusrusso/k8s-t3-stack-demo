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
import { IoK8sMigrationV1alpha1StorageVersionMigrationSpecResource } from './ioK8sMigrationV1alpha1StorageVersionMigrationSpecResource';

/**
* Specification of the migration.
*/
export class IoK8sMigrationV1alpha1StorageVersionMigrationSpec {
    /**
    * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is \"Running\", users can use this token to check the progress of the migration.
    */
    'continueToken'?: string;
    'resource': IoK8sMigrationV1alpha1StorageVersionMigrationSpecResource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "continueToken",
            "baseName": "continueToken",
            "type": "string"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "IoK8sMigrationV1alpha1StorageVersionMigrationSpecResource"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sMigrationV1alpha1StorageVersionMigrationSpec.attributeTypeMap;
    }
}

