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
import { ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluationsMemberRestrictionEvaluation } from './comGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluationsMemberRestrictionEvaluation';

/**
* Evaluations of restrictions applied to parent group on this membership.
*/
export class ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluations {
    'memberRestrictionEvaluation'?: ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluationsMemberRestrictionEvaluation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memberRestrictionEvaluation",
            "baseName": "memberRestrictionEvaluation",
            "type": "ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluationsMemberRestrictionEvaluation"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerRestrictionEvaluations.attributeTypeMap;
    }
}

