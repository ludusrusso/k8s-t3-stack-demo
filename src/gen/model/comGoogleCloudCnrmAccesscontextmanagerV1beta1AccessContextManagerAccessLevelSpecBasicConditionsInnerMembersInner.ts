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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInnerServiceAccountRef } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInnerServiceAccountRef';

/**
* An allowed list of members (users, service accounts). Using groups is not supported.  The signed-in user originating the request must be a part of one of the provided members. If not specified, a request may come from any user (logged in/not logged in, not present in any groups, etc.).
*/
export class ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInner {
    'serviceAccountRef'?: ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInnerServiceAccountRef;
    'user'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "serviceAccountRef",
            "baseName": "serviceAccountRef",
            "type": "ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInnerServiceAccountRef"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecBasicConditionsInnerMembersInner.attributeTypeMap;
    }
}

