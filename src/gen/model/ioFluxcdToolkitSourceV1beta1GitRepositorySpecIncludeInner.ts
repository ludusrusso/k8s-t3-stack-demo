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
import { IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInnerRepository } from './ioFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInnerRepository';

/**
* GitRepositoryInclude defines a source with a from and to path.
*/
export class IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner {
    /**
    * The path to copy contents from, defaults to the root directory.
    */
    'fromPath'?: string;
    'repository': IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInnerRepository;
    /**
    * The path to copy contents to, defaults to the name of the source ref.
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
            "type": "IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInnerRepository"
        },
        {
            "name": "toPath",
            "baseName": "toPath",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner.attributeTypeMap;
    }
}

