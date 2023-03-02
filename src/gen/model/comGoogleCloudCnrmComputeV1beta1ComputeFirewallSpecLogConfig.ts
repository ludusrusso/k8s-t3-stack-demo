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
* This field denotes the logging options for a particular firewall rule. If defined, logging is enabled, and logs will be exported to Cloud Logging.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeFirewallSpecLogConfig {
    /**
    * This field denotes whether to include or exclude metadata for firewall logs. Possible values: [\"EXCLUDE_ALL_METADATA\", \"INCLUDE_ALL_METADATA\"].
    */
    'metadata': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeFirewallSpecLogConfig.attributeTypeMap;
    }
}

