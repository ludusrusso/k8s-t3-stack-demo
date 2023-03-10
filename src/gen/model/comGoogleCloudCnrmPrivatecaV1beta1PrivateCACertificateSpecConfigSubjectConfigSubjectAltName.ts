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
* Immutable. Optional. The subject alternative name fields.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigSubjectConfigSubjectAltName {
    /**
    * Immutable. Contains only valid, fully-qualified host names.
    */
    'dnsNames'?: Array<string>;
    /**
    * Immutable. Contains only valid RFC 2822 E-mail addresses.
    */
    'emailAddresses'?: Array<string>;
    /**
    * Immutable. Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
    */
    'ipAddresses'?: Array<string>;
    /**
    * Immutable. Contains only valid RFC 3986 URIs.
    */
    'uris'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dnsNames",
            "baseName": "dnsNames",
            "type": "Array<string>"
        },
        {
            "name": "emailAddresses",
            "baseName": "emailAddresses",
            "type": "Array<string>"
        },
        {
            "name": "ipAddresses",
            "baseName": "ipAddresses",
            "type": "Array<string>"
        },
        {
            "name": "uris",
            "baseName": "uris",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateSpecConfigSubjectConfigSubjectAltName.attributeTypeMap;
    }
}

