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
* OAuthClientCredentials contains credentials for a single IAP-enabled backend.
*/
export class ComGoogleCloudV1BackendConfigSpecIapOauthclientCredentials {
    /**
    * Direct reference to OAuth client id.
    */
    'clientID'?: string;
    /**
    * Direct reference to OAuth client secret.
    */
    'clientSecret'?: string;
    /**
    * The name of a k8s secret which stores the OAuth client id & secret.
    */
    'secretName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientID",
            "baseName": "clientID",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string"
        },
        {
            "name": "secretName",
            "baseName": "secretName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudV1BackendConfigSpecIapOauthclientCredentials.attributeTypeMap;
    }
}

