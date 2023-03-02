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
* The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
*/
export class ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerExpiryDetail {
    /**
    * The time at which the `MembershipRole` will expire.
    */
    'expireTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudidentityV1beta1CloudIdentityMembershipSpecRolesInnerExpiryDetail.attributeTypeMap;
    }
}

