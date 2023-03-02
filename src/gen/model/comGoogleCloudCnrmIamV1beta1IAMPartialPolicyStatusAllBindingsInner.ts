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
import { ComGoogleCloudCnrmIamV1beta1IAMPartialPolicySpecBindingsInnerCondition } from './comGoogleCloudCnrmIamV1beta1IAMPartialPolicySpecBindingsInnerCondition';

/**
* Specifies the members to bind to an IAM role.
*/
export class ComGoogleCloudCnrmIamV1beta1IAMPartialPolicyStatusAllBindingsInner {
    'condition'?: ComGoogleCloudCnrmIamV1beta1IAMPartialPolicySpecBindingsInnerCondition;
    /**
    * Optional. The list of IAM users to be bound to the role.
    */
    'members'?: Array<string>;
    /**
    * Required. The role to bind the users to.
    */
    'role': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "condition",
            "baseName": "condition",
            "type": "ComGoogleCloudCnrmIamV1beta1IAMPartialPolicySpecBindingsInnerCondition"
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<string>"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmIamV1beta1IAMPartialPolicyStatusAllBindingsInner.attributeTypeMap;
    }
}

