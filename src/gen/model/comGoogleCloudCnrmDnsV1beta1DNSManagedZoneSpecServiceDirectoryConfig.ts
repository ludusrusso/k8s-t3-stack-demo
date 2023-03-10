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
import { ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfigNamespace } from './comGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfigNamespace';

/**
* Immutable. The presence of this field indicates that this zone is backed by Service Directory. The value of this field contains information related to the namespace associated with the zone.
*/
export class ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfig {
    'namespace': ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfigNamespace;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfigNamespace"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDnsV1beta1DNSManagedZoneSpecServiceDirectoryConfig.attributeTypeMap;
    }
}

