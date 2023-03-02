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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNote } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNote';

export class ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpec {
    /**
    * Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
    */
    'description'?: string;
    'projectRef': ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'userOwnedDrydockNote'?: ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNote;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "userOwnedDrydockNote",
            "baseName": "userOwnedDrydockNote",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNote"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpec.attributeTypeMap;
    }
}

