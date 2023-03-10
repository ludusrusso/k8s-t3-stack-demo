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
* Configuration of Query Insights.
*/
export class ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecSettingsInsightsConfig {
    /**
    * True if Query Insights feature is enabled.
    */
    'queryInsightsEnabled'?: boolean;
    /**
    * Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
    */
    'queryStringLength'?: number;
    /**
    * True if Query Insights will record application tags from query when enabled.
    */
    'recordApplicationTags'?: boolean;
    /**
    * True if Query Insights will record client address when enabled.
    */
    'recordClientAddress'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "queryInsightsEnabled",
            "baseName": "queryInsightsEnabled",
            "type": "boolean"
        },
        {
            "name": "queryStringLength",
            "baseName": "queryStringLength",
            "type": "number"
        },
        {
            "name": "recordApplicationTags",
            "baseName": "recordApplicationTags",
            "type": "boolean"
        },
        {
            "name": "recordClientAddress",
            "baseName": "recordClientAddress",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecSettingsInsightsConfig.attributeTypeMap;
    }
}

