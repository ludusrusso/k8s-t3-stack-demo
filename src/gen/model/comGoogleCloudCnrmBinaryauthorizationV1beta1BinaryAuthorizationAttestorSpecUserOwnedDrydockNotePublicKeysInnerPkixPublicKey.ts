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
* A raw PKIX SubjectPublicKeyInfo format public key. NOTE: `id` may be explicitly provided by the caller when using this type of public key, but it MUST be a valid RFC3986 URI. If `id` is left blank, a default one will be computed based on the digest of the DER encoding of the public key.
*/
export class ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey {
    /**
    * A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13
    */
    'publicKeyPem'?: string;
    /**
    * The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key). Possible values: SIGNATURE_ALGORITHM_UNSPECIFIED, RSA_PSS_2048_SHA256, RSA_PSS_3072_SHA256, RSA_PSS_4096_SHA256, RSA_PSS_4096_SHA512, RSA_SIGN_PKCS1_2048_SHA256, RSA_SIGN_PKCS1_3072_SHA256, RSA_SIGN_PKCS1_4096_SHA256, RSA_SIGN_PKCS1_4096_SHA512, ECDSA_P256_SHA256, EC_SIGN_P256_SHA256, ECDSA_P384_SHA384, EC_SIGN_P384_SHA384, ECDSA_P521_SHA512, EC_SIGN_P521_SHA512
    */
    'signatureAlgorithm'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "publicKeyPem",
            "baseName": "publicKeyPem",
            "type": "string"
        },
        {
            "name": "signatureAlgorithm",
            "baseName": "signatureAlgorithm",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecUserOwnedDrydockNotePublicKeysInnerPkixPublicKey.attributeTypeMap;
    }
}

