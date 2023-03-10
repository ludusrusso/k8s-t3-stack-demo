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
import { ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterCustomPeriod } from './comGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterCustomPeriod';
import { ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterLabelsValue } from './comGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterLabelsValue';
import { ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner } from './comGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner';
import { ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterSubaccountsInner } from './comGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterSubaccountsInner';

/**
* Optional. Filters that define which resources are used to compute the actual spend against the budget amount, such as projects, services, and the budget\'s time period, as well as other filters.
*/
export class ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilter {
    /**
    * Optional. Specifies to track usage for recurring calendar period. For example, assume that CalendarPeriod.QUARTER is set. The budget will track usage from April 1 to June 30, when the current calendar month is April, May, June. After that, it will track usage from July 1 to September 30 when the current calendar month is July, August, September, so on. Possible values: CALENDAR_PERIOD_UNSPECIFIED, MONTH, QUARTER, YEAR
    */
    'calendarPeriod'?: string;
    /**
    * Optional. If Filter.credit_types_treatment is INCLUDE_SPECIFIED_CREDITS, this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values. If Filter.credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.
    */
    'creditTypes'?: Array<string>;
    /**
    * Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`.
    */
    'creditTypesTreatment'?: string;
    'customPeriod'?: ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterCustomPeriod;
    /**
    * Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage.
    */
    'labels'?: { [key: string]: ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterLabelsValue; };
    'projects'?: Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner>;
    /**
    * Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
    */
    'services'?: Array<string>;
    'subaccounts'?: Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterSubaccountsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "calendarPeriod",
            "baseName": "calendarPeriod",
            "type": "string"
        },
        {
            "name": "creditTypes",
            "baseName": "creditTypes",
            "type": "Array<string>"
        },
        {
            "name": "creditTypesTreatment",
            "baseName": "creditTypesTreatment",
            "type": "string"
        },
        {
            "name": "customPeriod",
            "baseName": "customPeriod",
            "type": "ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterCustomPeriod"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterLabelsValue; }"
        },
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterProjectsInner>"
        },
        {
            "name": "services",
            "baseName": "services",
            "type": "Array<string>"
        },
        {
            "name": "subaccounts",
            "baseName": "subaccounts",
            "type": "Array<ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilterSubaccountsInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmBillingbudgetsV1beta1BillingBudgetsBudgetSpecBudgetFilter.attributeTypeMap;
    }
}

