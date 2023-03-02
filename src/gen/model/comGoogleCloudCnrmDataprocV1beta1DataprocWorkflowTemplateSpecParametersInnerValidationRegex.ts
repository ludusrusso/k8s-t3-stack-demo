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
* Immutable. Validation based on regular expressions.
*/
export class ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInnerValidationRegex {
    /**
    * Immutable. Required. RE2 regular expressions used to validate the parameter\'s value. The value must match the regex in its entirety (substring matches are not sufficient).
    */
    'regexes': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "regexes",
            "baseName": "regexes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDataprocV1beta1DataprocWorkflowTemplateSpecParametersInnerValidationRegex.attributeTypeMap;
    }
}

