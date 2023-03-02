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
* SignedUrlKey represents a customer-supplied Signing Key used by Cloud CDN Signed URLs
*/
export class ComGoogleCloudV1BackendConfigSpecCdnSignedUrlKeysInner {
    /**
    * KeyName: Name of the key. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
    */
    'keyName'?: string;
    /**
    * KeyValue: 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string.
    */
    'keyValue'?: string;
    /**
    * The name of a k8s secret which stores the 128-bit key value used for signing the URL. The key value must be a valid RFC 4648 Section 5 base64url encoded string
    */
    'secretName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "keyName",
            "baseName": "keyName",
            "type": "string"
        },
        {
            "name": "keyValue",
            "baseName": "keyValue",
            "type": "string"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudV1BackendConfigSpecCdnSignedUrlKeysInner.attributeTypeMap;
    }
}
