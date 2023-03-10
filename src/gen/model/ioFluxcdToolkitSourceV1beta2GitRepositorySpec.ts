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
import { IoFluxcdToolkitSourceV1beta2BucketSpecAccessFrom } from './ioFluxcdToolkitSourceV1beta2BucketSpecAccessFrom';
import { IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner } from './ioFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner';
import { IoFluxcdToolkitSourceV1beta2GitRepositorySpecRef } from './ioFluxcdToolkitSourceV1beta2GitRepositorySpecRef';
import { IoFluxcdToolkitSourceV1beta2GitRepositorySpecSecretRef } from './ioFluxcdToolkitSourceV1beta2GitRepositorySpecSecretRef';
import { IoFluxcdToolkitSourceV1beta2GitRepositorySpecVerify } from './ioFluxcdToolkitSourceV1beta2GitRepositorySpecVerify';

/**
* GitRepositorySpec specifies the required configuration to produce an Artifact for a Git repository.
*/
export class IoFluxcdToolkitSourceV1beta2GitRepositorySpec {
    'accessFrom'?: IoFluxcdToolkitSourceV1beta2BucketSpecAccessFrom;
    /**
    * GitImplementation specifies which Git client library implementation to use. Defaults to \'go-git\', valid values are (\'go-git\', \'libgit2\').
    */
    'gitImplementation'?: IoFluxcdToolkitSourceV1beta2GitRepositorySpec.GitImplementationEnum;
    /**
    * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
    */
    'ignore'?: string;
    /**
    * Include specifies a list of GitRepository resources which Artifacts should be included in the Artifact produced for this GitRepository.
    */
    'include'?: Array<IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner>;
    /**
    * Interval at which to check the GitRepository for updates.
    */
    'interval': string;
    /**
    * RecurseSubmodules enables the initialization of all submodules within the GitRepository as cloned from the URL, using their default settings. This option is available only when using the \'go-git\' GitImplementation.
    */
    'recurseSubmodules'?: boolean;
    'ref'?: IoFluxcdToolkitSourceV1beta2GitRepositorySpecRef;
    'secretRef'?: IoFluxcdToolkitSourceV1beta2GitRepositorySpecSecretRef;
    /**
    * Suspend tells the controller to suspend the reconciliation of this GitRepository.
    */
    'suspend'?: boolean;
    /**
    * Timeout for Git operations like cloning, defaults to 60s.
    */
    'timeout'?: string;
    /**
    * URL specifies the Git repository URL, it can be an HTTP/S or SSH address.
    */
    'url': string;
    'verify'?: IoFluxcdToolkitSourceV1beta2GitRepositorySpecVerify;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessFrom",
            "baseName": "accessFrom",
            "type": "IoFluxcdToolkitSourceV1beta2BucketSpecAccessFrom"
        },
        {
            "name": "gitImplementation",
            "baseName": "gitImplementation",
            "type": "IoFluxcdToolkitSourceV1beta2GitRepositorySpec.GitImplementationEnum"
        },
        {
            "name": "ignore",
            "baseName": "ignore",
            "type": "string"
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<IoFluxcdToolkitSourceV1beta2GitRepositorySpecIncludeInner>"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "recurseSubmodules",
            "baseName": "recurseSubmodules",
            "type": "boolean"
        },
        {
            "name": "ref",
            "baseName": "ref",
            "type": "IoFluxcdToolkitSourceV1beta2GitRepositorySpecRef"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoFluxcdToolkitSourceV1beta2GitRepositorySpecSecretRef"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "verify",
            "baseName": "verify",
            "type": "IoFluxcdToolkitSourceV1beta2GitRepositorySpecVerify"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta2GitRepositorySpec.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitSourceV1beta2GitRepositorySpec {
    export enum GitImplementationEnum {
        GoGit = <any> 'go-git',
        Libgit2 = <any> 'libgit2'
    }
}
