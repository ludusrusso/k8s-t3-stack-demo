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

export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner {
    /**
    * Required. The parts of an OID path. The most significant parts of the path come first.
    */
    'objectIdPath': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectIdPath",
            "baseName": "objectIdPath",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesInner.attributeTypeMap;
    }
}

