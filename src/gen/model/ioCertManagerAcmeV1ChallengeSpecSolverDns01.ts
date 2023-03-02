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
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Akamai';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53 } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Webhook';

/**
* Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverDns01 {
    'acmeDNS'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS;
    'akamai'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai;
    'azureDNS'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS;
    'cloudDNS'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS;
    'cloudflare'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare;
    /**
    * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
    */
    'cnameStrategy'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01.CnameStrategyEnum;
    'digitalocean'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean;
    'rfc2136'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136;
    'route53'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53;
    'webhook'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acmeDNS",
            "baseName": "acmeDNS",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AcmeDNS"
        },
        {
            "name": "akamai",
            "baseName": "akamai",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Akamai"
        },
        {
            "name": "azureDNS",
            "baseName": "azureDNS",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01AzureDNS"
        },
        {
            "name": "cloudDNS",
            "baseName": "cloudDNS",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01CloudDNS"
        },
        {
            "name": "cloudflare",
            "baseName": "cloudflare",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Cloudflare"
        },
        {
            "name": "cnameStrategy",
            "baseName": "cnameStrategy",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01.CnameStrategyEnum"
        },
        {
            "name": "digitalocean",
            "baseName": "digitalocean",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Digitalocean"
        },
        {
            "name": "rfc2136",
            "baseName": "rfc2136",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Rfc2136"
        },
        {
            "name": "route53",
            "baseName": "route53",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Webhook"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverDns01.attributeTypeMap;
    }
}

export namespace IoCertManagerAcmeV1ChallengeSpecSolverDns01 {
    export enum CnameStrategyEnum {
        None = <any> 'None',
        Follow = <any> 'Follow'
    }
}