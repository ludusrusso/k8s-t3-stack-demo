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
import { IoFluxcdToolkitSourceV1beta1BucketSpecAccessFrom } from './ioFluxcdToolkitSourceV1beta1BucketSpecAccessFrom';
import { IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner } from './ioFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner';
import { IoFluxcdToolkitSourceV1beta1GitRepositorySpecRef } from './ioFluxcdToolkitSourceV1beta1GitRepositorySpecRef';
import { IoFluxcdToolkitSourceV1beta1GitRepositorySpecSecretRef } from './ioFluxcdToolkitSourceV1beta1GitRepositorySpecSecretRef';
import { IoFluxcdToolkitSourceV1beta1GitRepositorySpecVerify } from './ioFluxcdToolkitSourceV1beta1GitRepositorySpecVerify';

/**
* GitRepositorySpec defines the desired state of a Git repository.
*/
export class IoFluxcdToolkitSourceV1beta1GitRepositorySpec {
    'accessFrom'?: IoFluxcdToolkitSourceV1beta1BucketSpecAccessFrom;
    /**
    * Determines which git client library to use. Defaults to go-git, valid values are (\'go-git\', \'libgit2\').
    */
    'gitImplementation'?: IoFluxcdToolkitSourceV1beta1GitRepositorySpec.GitImplementationEnum;
    /**
    * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
    */
    'ignore'?: string;
    /**
    * Extra git repositories to map into the repository
    */
    'include'?: Array<IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner>;
    /**
    * The interval at which to check for repository updates.
    */
    'interval': string;
    /**
    * When enabled, after the clone is created, initializes all submodules within, using their default settings. This option is available only when using the \'go-git\' GitImplementation.
    */
    'recurseSubmodules'?: boolean;
    'ref'?: IoFluxcdToolkitSourceV1beta1GitRepositorySpecRef;
    'secretRef'?: IoFluxcdToolkitSourceV1beta1GitRepositorySpecSecretRef;
    /**
    * This flag tells the controller to suspend the reconciliation of this source.
    */
    'suspend'?: boolean;
    /**
    * The timeout for remote Git operations like cloning, defaults to 60s.
    */
    'timeout'?: string;
    /**
    * The repository URL, can be a HTTP/S or SSH address.
    */
    'url': string;
    'verify'?: IoFluxcdToolkitSourceV1beta1GitRepositorySpecVerify;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessFrom",
            "baseName": "accessFrom",
            "type": "IoFluxcdToolkitSourceV1beta1BucketSpecAccessFrom"
        },
        {
            "name": "gitImplementation",
            "baseName": "gitImplementation",
            "type": "IoFluxcdToolkitSourceV1beta1GitRepositorySpec.GitImplementationEnum"
        },
        {
            "name": "ignore",
            "baseName": "ignore",
            "type": "string"
        },
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<IoFluxcdToolkitSourceV1beta1GitRepositorySpecIncludeInner>"
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
            "type": "IoFluxcdToolkitSourceV1beta1GitRepositorySpecRef"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoFluxcdToolkitSourceV1beta1GitRepositorySpecSecretRef"
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
            "type": "IoFluxcdToolkitSourceV1beta1GitRepositorySpecVerify"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta1GitRepositorySpec.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitSourceV1beta1GitRepositorySpec {
    export enum GitImplementationEnum {
        GoGit = <any> 'go-git',
        Libgit2 = <any> 'libgit2'
    }
}
