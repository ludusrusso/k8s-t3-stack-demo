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
* Parameters defining the redirect action that is used as the exceed action. Cannot be specified if the exceed action is not redirect.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeSecurityPolicySpecRuleInnerRateLimitOptionsExceedRedirectOptions {
    /**
    * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
    */
    'target'?: string;
    /**
    * Type of the redirect action.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeSecurityPolicySpecRuleInnerRateLimitOptionsExceedRedirectOptions.attributeTypeMap;
    }
}

