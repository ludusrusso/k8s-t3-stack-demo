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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey';

export class ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInner {
    /**
    * ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID.
    */
    'asciiArmoredPgpPublicKey'?: string;
    /**
    * Optional. A descriptive comment. This field may be updated.
    */
    'comment'?: string;
    /**
    * The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details.
    */
    'id'?: string;
    'pkixPublicKey'?: ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "asciiArmoredPgpPublicKey",
            "baseName": "asciiArmoredPgpPublicKey",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "pkixPublicKey",
            "baseName": "pkixPublicKey",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInner.attributeTypeMap;
    }
}

