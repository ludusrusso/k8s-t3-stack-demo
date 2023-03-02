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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecClusterAdmissionRulesValueRequireAttestationsByInner } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecClusterAdmissionRulesValueRequireAttestationsByInner';

/**
* Required. Default admission rule for a cluster without a per-cluster, per-kubernetes-service-account, or per-istio-service-identity admission rule.
*/
export class ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecDefaultAdmissionRule {
    /**
    * Required. The action when a pod creation is denied by the admission rule. Possible values: ENFORCEMENT_MODE_UNSPECIFIED, ENFORCED_BLOCK_AND_AUDIT_LOG, DRYRUN_AUDIT_LOG_ONLY
    */
    'enforcementMode': string;
    /**
    * Required. How this admission rule will be evaluated. Possible values: ALWAYS_ALLOW, ALWAYS_DENY, REQUIRE_ATTESTATION
    */
    'evaluationMode': string;
    'requireAttestationsBy'?: Array<ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecClusterAdmissionRulesValueRequireAttestationsByInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enforcementMode",
            "baseName": "enforcementMode",
            "type": "string"
        },
        {
            "name": "evaluationMode",
            "baseName": "evaluationMode",
            "type": "string"
        },
        {
            "name": "requireAttestationsBy",
            "baseName": "requireAttestationsBy",
            "type": "Array<ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecClusterAdmissionRulesValueRequireAttestationsByInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationPolicySpecDefaultAdmissionRule.attributeTypeMap;
    }
}
