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
* Represents an allowed Elliptic Curve key type.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyAllowedKeyTypesInnerEllipticCurve {
    /**
    * Optional. A signature algorithm that must be used. If this is omitted, any EC-based signature algorithm will be allowed. Possible values: EC_SIGNATURE_ALGORITHM_UNSPECIFIED, ECDSA_P256, ECDSA_P384, EDDSA_25519
    */
    'signatureAlgorithm'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signatureAlgorithm",
            "baseName": "signatureAlgorithm",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyAllowedKeyTypesInnerEllipticCurve.attributeTypeMap;
    }
}

