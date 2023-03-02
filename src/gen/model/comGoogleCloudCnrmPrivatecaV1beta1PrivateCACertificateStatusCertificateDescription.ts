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
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionAuthorityKeyId } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionAuthorityKeyId';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionCertFingerprint } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionCertFingerprint';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionPublicKey } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionPublicKey';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectDescription } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectDescription';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectKeyId } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectKeyId';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionX509Description } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionX509Description';

/**
* Output only. A structured description of the issued X.509 certificate.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescription {
    /**
    * Describes lists of issuer CA certificate URLs that appear in the \"Authority Information Access\" extension in the certificate.
    */
    'aiaIssuingCertificateUrls'?: Array<string>;
    'authorityKeyId'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionAuthorityKeyId;
    'certFingerprint'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionCertFingerprint;
    /**
    * Describes a list of locations to obtain CRL information, i.e. the DistributionPoint.fullName described by https://tools.ietf.org/html/rfc5280#section-4.2.1.13
    */
    'crlDistributionPoints'?: Array<string>;
    'publicKey'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionPublicKey;
    'subjectDescription'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectDescription;
    'subjectKeyId'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectKeyId;
    'x509Description'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionX509Description;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aiaIssuingCertificateUrls",
            "baseName": "aiaIssuingCertificateUrls",
            "type": "Array<string>"
        },
        {
            "name": "authorityKeyId",
            "baseName": "authorityKeyId",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionAuthorityKeyId"
        },
        {
            "name": "certFingerprint",
            "baseName": "certFingerprint",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionCertFingerprint"
        },
        {
            "name": "crlDistributionPoints",
            "baseName": "crlDistributionPoints",
            "type": "Array<string>"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionPublicKey"
        },
        {
            "name": "subjectDescription",
            "baseName": "subjectDescription",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectDescription"
        },
        {
            "name": "subjectKeyId",
            "baseName": "subjectKeyId",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionSubjectKeyId"
        },
        {
            "name": "x509Description",
            "baseName": "x509Description",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescriptionX509Description"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACertificateStatusCertificateDescription.attributeTypeMap;
    }
}

