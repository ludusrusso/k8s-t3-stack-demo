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
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesAdditionalExtensionsInner } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesAdditionalExtensionsInner';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesCaOptions } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesCaOptions';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsage } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsage';
import { ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner } from './comGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner';

/**
* Optional. A set of X.509 values that will be applied to all certificates issued through this CaPool. If a certificate request includes conflicting values for the same properties, they will be overwritten by the values defined here. If a certificate request uses a CertificateTemplate that defines conflicting predefined_values for the same properties, the certificate issuance request will fail.
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValues {
    /**
    * Optional. Describes custom X.509 extensions.
    */
    'additionalExtensions'?: Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesAdditionalExtensionsInner>;
    /**
    * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the \"Authority Information Access\" extension in the certificate.
    */
    'aiaOcspServers'?: Array<string>;
    'caOptions'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesCaOptions;
    'keyUsage'?: ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsage;
    /**
    * Optional. Describes the X.509 certificate policy object identifiers, per https://tools.ietf.org/html/rfc5280#section-4.2.1.4.
    */
    'policyIds'?: Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalExtensions",
            "baseName": "additionalExtensions",
            "type": "Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesAdditionalExtensionsInner>"
        },
        {
            "name": "aiaOcspServers",
            "baseName": "aiaOcspServers",
            "type": "Array<string>"
        },
        {
            "name": "caOptions",
            "baseName": "caOptions",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesCaOptions"
        },
        {
            "name": "keyUsage",
            "baseName": "keyUsage",
            "type": "ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsage"
        },
        {
            "name": "policyIds",
            "baseName": "policyIds",
            "type": "Array<ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValues.attributeTypeMap;
    }
}

