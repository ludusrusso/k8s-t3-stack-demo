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
* Immutable. Options for user acceptance testing.
*/
export class ComGoogleCloudCnrmRecaptchaenterpriseV1beta1RecaptchaEnterpriseKeySpecTestingOptions {
    /**
    * Immutable. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE
    */
    'testingChallenge'?: string;
    /**
    * Immutable. All assessments for this Key will return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
    */
    'testingScore'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "testingChallenge",
            "baseName": "testingChallenge",
            "type": "string"
        },
        {
            "name": "testingScore",
            "baseName": "testingScore",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmRecaptchaenterpriseV1beta1RecaptchaEnterpriseKeySpecTestingOptions.attributeTypeMap;
    }
}
