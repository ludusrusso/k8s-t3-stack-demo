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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustomExpr } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustomExpr';

/**
* Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.  See CEL spec at: https://github.com/google/cel-spec.
*/
export class ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustom {
    'expr': ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustomExpr;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expr",
            "baseName": "expr",
            "type": "ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustomExpr"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelSpecCustom.attributeTypeMap;
    }
}

