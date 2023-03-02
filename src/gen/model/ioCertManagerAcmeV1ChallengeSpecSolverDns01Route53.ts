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
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef';
import { IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef } from './ioCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef';

/**
* Use the AWS Route53 API to manage DNS01 challenge records.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53 {
    /**
    * The AccessKeyID is used for authentication. Cannot be set when SecretAccessKeyID is set. If neither the Access Key nor Key ID are set, we fall-back to using env vars, shared credentials file or AWS Instance metadata, see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
    */
    'accessKeyID'?: string;
    'accessKeyIDSecretRef'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef;
    /**
    * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
    */
    'hostedZoneID'?: string;
    /**
    * Always set the region when using AccessKeyID and SecretAccessKey
    */
    'region': string;
    /**
    * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
    */
    'role'?: string;
    'secretAccessKeySecretRef'?: IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accessKeyID",
            "baseName": "accessKeyID",
            "type": "string"
        },
        {
            "name": "accessKeyIDSecretRef",
            "baseName": "accessKeyIDSecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53AccessKeyIDSecretRef"
        },
        {
            "name": "hostedZoneID",
            "baseName": "hostedZoneID",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        },
        {
            "name": "secretAccessKeySecretRef",
            "baseName": "secretAccessKeySecretRef",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53SecretAccessKeySecretRef"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverDns01Route53.attributeTypeMap;
    }
}
