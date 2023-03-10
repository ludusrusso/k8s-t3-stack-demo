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

export class ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecThresholdRulesInner {
    /**
    * Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. Possible values: BASIS_UNSPECIFIED, CURRENT_SPEND, FORECASTED_SPEND
    */
    'spendBasis'?: string;
    /**
    * Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number.
    */
    'thresholdPercent': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "spendBasis",
            "baseName": "spendBasis",
            "type": "string"
        },
        {
            "name": "thresholdPercent",
            "baseName": "thresholdPercent",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecThresholdRulesInner.attributeTypeMap;
    }
}

