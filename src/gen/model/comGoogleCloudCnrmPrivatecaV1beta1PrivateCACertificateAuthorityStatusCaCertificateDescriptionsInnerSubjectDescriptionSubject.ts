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
* Contains distinguished name fields such as the common name, location and organization.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInnerSubjectDescriptionSubject {
    /**
    * The \"common name\" of the subject.
    */
    'commonName'?: string;
    /**
    * The country code of the subject.
    */
    'countryCode'?: string;
    /**
    * The locality or city of the subject.
    */
    'locality'?: string;
    /**
    * The organization of the subject.
    */
    'organization'?: string;
    /**
    * The organizational_unit of the subject.
    */
    'organizationalUnit'?: string;
    /**
    * The postal code of the subject.
    */
    'postalCode'?: string;
    /**
    * The province, territory, or regional state of the subject.
    */
    'province'?: string;
    /**
    * The street address of the subject.
    */
    'streetAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string"
        },
        {
            "name": "organizationalUnit",
            "baseName": "organizationalUnit",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "province",
            "baseName": "province",
            "type": "string"
        },
        {
            "name": "streetAddress",
            "baseName": "streetAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateAuthorityStatusCaCertificateDescriptionsInnerSubjectDescriptionSubject.attributeTypeMap;
    }
}

