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
import { IoCertManagerV1CertificateRequestStatusConditionsInner } from './ioCertManagerV1CertificateRequestStatusConditionsInner';

/**
* Status of the CertificateRequest. This is set and managed automatically.
*/
export class IoCertManagerV1CertificateRequestStatus {
    /**
    * The PEM encoded x509 certificate of the signer, also known as the CA (Certificate Authority). This is set on a best-effort basis by different issuers. If not set, the CA is assumed to be unknown/not available.
    */
    'ca'?: string;
    /**
    * The PEM encoded x509 certificate resulting from the certificate signing request. If not set, the CertificateRequest has either not been completed or has failed. More information on failure can be found by checking the `conditions` field.
    */
    'certificate'?: string;
    /**
    * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready` and `InvalidRequest`.
    */
    'conditions'?: Array<IoCertManagerV1CertificateRequestStatusConditionsInner>;
    /**
    * FailureTime stores the time that this CertificateRequest failed. This is used to influence garbage collection and back-off.
    */
    'failureTime'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ca",
            "baseName": "ca",
            "type": "string"
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "string"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<IoCertManagerV1CertificateRequestStatusConditionsInner>"
        },
        {
            "name": "failureTime",
            "baseName": "failureTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateRequestStatus.attributeTypeMap;
    }
}

