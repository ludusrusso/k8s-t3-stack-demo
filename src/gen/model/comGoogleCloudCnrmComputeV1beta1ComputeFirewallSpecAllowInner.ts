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

export class ComGoogleCloudCnrmComputeV1beta1ComputeFirewallSpecAllowInner {
    /**
    * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.  Example inputs include: [\"22\"], [\"80\",\"443\"], and [\"12345-12349\"].
    */
    'ports'?: Array<string>;
    /**
    * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, sctp, ipip, all), or the IP protocol number.
    */
    'protocol': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<string>"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeFirewallSpecAllowInner.attributeTypeMap;
    }
}
