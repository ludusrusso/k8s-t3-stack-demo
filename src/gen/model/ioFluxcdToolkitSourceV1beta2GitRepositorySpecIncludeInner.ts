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
import { IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInnerRepository } from './ioFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInnerRepository';

/**
* GitRepositoryInclude specifies a local reference to a GitRepository which Artifact (sub-)contents must be included, and where they should be placed.
*/
export class IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner {
    /**
    * FromPath specifies the path to copy contents from, defaults to the root of the Artifact.
    */
    'fromPath'?: string;
    'repository': IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInnerRepository;
    /**
    * ToPath specifies the path to copy contents to, defaults to the name of the GitRepositoryRef.
    */
    'toPath'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromPath",
            "baseName": "fromPath",
            "type": "string"
        },
        {
            "name": "repository",
            "baseName": "repository",
            "type": "IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInnerRepository"
        },
        {
            "name": "toPath",
            "baseName": "toPath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner.attributeTypeMap;
    }
}
