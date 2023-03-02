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
* The service account used for all user-controlled operations including triggers.patch, triggers.run, builds.create, and builds.cancel.  If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.  When populating via the external field, the following format is supported: projects/{PROJECT_ID}/serviceAccounts/{SERVICE_ACCOUNT_EMAIL}
*/
export class ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecServiceAccountRef {
    /**
    * Allowed value: string of the format `projects/{{project}}/serviceAccounts/{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
    */
    'external'?: string;
    /**
    * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
    */
    'name'?: string;
    /**
    * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
    */
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "external",
            "baseName": "external",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudbuildV1beta1CloudBuildTriggerSpecServiceAccountRef.attributeTypeMap;
    }
}
