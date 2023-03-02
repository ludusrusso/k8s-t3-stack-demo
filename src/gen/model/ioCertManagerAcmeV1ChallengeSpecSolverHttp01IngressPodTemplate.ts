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
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata';
import { IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec } from './ioCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec';

/**
* Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate {
    'metadata'?: IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata;
    'spec'?: IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateMetadata"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplateSpec"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01IngressPodTemplate.attributeTypeMap;
    }
}

