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
import { ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfigTargetNameServersInner } from './comGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfigTargetNameServersInner';

/**
* Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
*/
export class ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig {
    /**
    * Sets an alternative name server for the associated networks. When specified, all DNS queries are forwarded to a name server that you choose. Names such as .internal are not available when an alternative name server is specified.
    */
    'targetNameServers': Array<ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfigTargetNameServersInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "targetNameServers",
            "baseName": "targetNameServers",
            "type": "Array<ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfigTargetNameServersInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmDnsV1beta1DNSPolicySpecAlternativeNameServerConfig.attributeTypeMap;
    }
}

