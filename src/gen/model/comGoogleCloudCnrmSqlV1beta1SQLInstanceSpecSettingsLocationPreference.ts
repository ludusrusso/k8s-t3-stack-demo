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

export class ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecSettingsLocationPreference {
    /**
    * A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
    */
    'followGaeApplication'?: string;
    /**
    * The preferred compute engine zone.
    */
    'zone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "followGaeApplication",
            "baseName": "followGaeApplication",
            "type": "string"
        },
        {
            "name": "zone",
            "baseName": "zone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmSqlV1beta1SQLInstanceSpecSettingsLocationPreference.attributeTypeMap;
    }
}

