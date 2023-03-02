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
import { IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner } from './ioCertManagerV1CertificateSpecAdditionalOutputFormatsInner';
import { IoCertManagerV1CertificateSpecIssuerRef } from './ioCertManagerV1CertificateSpecIssuerRef';
import { IoCertManagerV1CertificateSpecKeystores } from './ioCertManagerV1CertificateSpecKeystores';
import { IoCertManagerV1CertificateSpecPrivateKey } from './ioCertManagerV1CertificateSpecPrivateKey';
import { IoCertManagerV1CertificateSpecSecretTemplate } from './ioCertManagerV1CertificateSpecSecretTemplate';
import { IoCertManagerV1CertificateSpecSubject } from './ioCertManagerV1CertificateSpecSubject';

/**
* Desired state of the Certificate resource.
*/
export class IoCertManagerV1CertificateSpec {
    /**
    * AdditionalOutputFormats defines extra output formats of the private key and signed certificate chain to be written to this Certificate\'s target Secret. This is an Alpha Feature and is only enabled with the `--feature-gates=AdditionalCertificateOutputFormats=true` option on both the controller and webhook components.
    */
    'additionalOutputFormats'?: Array<IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner>;
    /**
    * CommonName is a common name to be used on the Certificate. The CommonName should have a length of 64 characters or fewer to avoid generating invalid CSRs. This value is ignored by TLS clients when any subject alt name is set. This is x509 behaviour: https://tools.ietf.org/html/rfc6125#section-6.4.4
    */
    'commonName'?: string;
    /**
    * DNSNames is a list of DNS subjectAltNames to be set on the Certificate.
    */
    'dnsNames'?: Array<string>;
    /**
    * The requested \'duration\' (i.e. lifetime) of the Certificate. This option may be ignored/overridden by some issuer types. If unset this defaults to 90 days. Certificate will be renewed either 2/3 through its duration or `renewBefore` period before its expiry, whichever is later. Minimum accepted duration is 1 hour. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration
    */
    'duration'?: string;
    /**
    * EmailAddresses is a list of email subjectAltNames to be set on the Certificate.
    */
    'emailAddresses'?: Array<string>;
    /**
    * EncodeUsagesInRequest controls whether key usages should be present in the CertificateRequest
    */
    'encodeUsagesInRequest'?: boolean;
    /**
    * IPAddresses is a list of IP address subjectAltNames to be set on the Certificate.
    */
    'ipAddresses'?: Array<string>;
    /**
    * IsCA will mark this Certificate as valid for certificate signing. This will automatically add the `cert sign` usage to the list of `usages`.
    */
    'isCA'?: boolean;
    'issuerRef': IoCertManagerV1CertificateSpecIssuerRef;
    'keystores'?: IoCertManagerV1CertificateSpecKeystores;
    /**
    * LiteralSubject is an LDAP formatted string that represents the [X.509 Subject field](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6). Use this *instead* of the Subject field if you need to ensure the correct ordering of the RDN sequence, such as when issuing certs for LDAP authentication. See https://github.com/cert-manager/cert-manager/issues/3203, https://github.com/cert-manager/cert-manager/issues/4424. This field is alpha level and is only supported by cert-manager installations where LiteralCertificateSubject feature gate is enabled on both cert-manager controller and webhook.
    */
    'literalSubject'?: string;
    'privateKey'?: IoCertManagerV1CertificateSpecPrivateKey;
    /**
    * How long before the currently issued certificate\'s expiry cert-manager should renew the certificate. The default is 2/3 of the issued certificate\'s duration. Minimum accepted value is 5 minutes. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration
    */
    'renewBefore'?: string;
    /**
    * revisionHistoryLimit is the maximum number of CertificateRequest revisions that are maintained in the Certificate\'s history. Each revision represents a single `CertificateRequest` created by this Certificate, either when it was created, renewed, or Spec was changed. Revisions will be removed by oldest first if the number of revisions exceeds this number. If set, revisionHistoryLimit must be a value of `1` or greater. If unset (`nil`), revisions will not be garbage collected. Default value is `nil`.
    */
    'revisionHistoryLimit'?: number;
    /**
    * SecretName is the name of the secret resource that will be automatically created and managed by this Certificate resource. It will be populated with a private key and certificate, signed by the denoted issuer.
    */
    'secretName': string;
    'secretTemplate'?: IoCertManagerV1CertificateSpecSecretTemplate;
    'subject'?: IoCertManagerV1CertificateSpecSubject;
    /**
    * URIs is a list of URI subjectAltNames to be set on the Certificate.
    */
    'uris'?: Array<string>;
    /**
    * Usages is the set of x509 usages that are requested for the certificate. Defaults to `digital signature` and `key encipherment` if not specified.
    */
    'usages'?: Array<IoCertManagerV1CertificateSpec.UsagesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalOutputFormats",
            "baseName": "additionalOutputFormats",
            "type": "Array<IoCertManagerV1CertificateSpecAdditionalOutputFormatsInner>"
        },
        {
            "name": "commonName",
            "baseName": "commonName",
            "type": "string"
        },
        {
            "name": "dnsNames",
            "baseName": "dnsNames",
            "type": "Array<string>"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "emailAddresses",
            "baseName": "emailAddresses",
            "type": "Array<string>"
        },
        {
            "name": "encodeUsagesInRequest",
            "baseName": "encodeUsagesInRequest",
            "type": "boolean"
        },
        {
            "name": "ipAddresses",
            "baseName": "ipAddresses",
            "type": "Array<string>"
        },
        {
            "name": "isCA",
            "baseName": "isCA",
            "type": "boolean"
        },
        {
            "name": "issuerRef",
            "baseName": "issuerRef",
            "type": "IoCertManagerV1CertificateSpecIssuerRef"
        },
        {
            "name": "keystores",
            "baseName": "keystores",
            "type": "IoCertManagerV1CertificateSpecKeystores"
        },
        {
            "name": "literalSubject",
            "baseName": "literalSubject",
            "type": "string"
        },
        {
            "name": "privateKey",
            "baseName": "privateKey",
            "type": "IoCertManagerV1CertificateSpecPrivateKey"
        },
        {
            "name": "renewBefore",
            "baseName": "renewBefore",
            "type": "string"
        },
        {
            "name": "revisionHistoryLimit",
            "baseName": "revisionHistoryLimit",
            "type": "number"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        },
        {
            "name": "secretTemplate",
            "baseName": "secretTemplate",
            "type": "IoCertManagerV1CertificateSpecSecretTemplate"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "IoCertManagerV1CertificateSpecSubject"
        },
        {
            "name": "uris",
            "baseName": "uris",
            "type": "Array<string>"
        },
        {
            "name": "usages",
            "baseName": "usages",
            "type": "Array<IoCertManagerV1CertificateSpec.UsagesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerV1CertificateSpec.attributeTypeMap;
    }
}

export namespace IoCertManagerV1CertificateSpec {
    export enum UsagesEnum {
        Signing = <any> 'signing',
        DigitalSignature = <any> 'digital signature',
        ContentCommitment = <any> 'content commitment',
        KeyEncipherment = <any> 'key encipherment',
        KeyAgreement = <any> 'key agreement',
        DataEncipherment = <any> 'data encipherment',
        CertSign = <any> 'cert sign',
        CrlSign = <any> 'crl sign',
        EncipherOnly = <any> 'encipher only',
        DecipherOnly = <any> 'decipher only',
        Any = <any> 'any',
        ServerAuth = <any> 'server auth',
        ClientAuth = <any> 'client auth',
        CodeSigning = <any> 'code signing',
        EmailProtection = <any> 'email protection',
        SMime = <any> 's/mime',
        IpsecEndSystem = <any> 'ipsec end system',
        IpsecTunnel = <any> 'ipsec tunnel',
        IpsecUser = <any> 'ipsec user',
        Timestamping = <any> 'timestamping',
        OcspSigning = <any> 'ocsp signing',
        MicrosoftSgc = <any> 'microsoft sgc',
        NetscapeSgc = <any> 'netscape sgc'
    }
}
