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
import { IoNatsJetstreamV1beta2AccountSpecCredsSecret } from './ioNatsJetstreamV1beta2AccountSpecCredsSecret';

/**
* The creds to be used to connect to the NATS Service.
*/
export class IoNatsJetstreamV1beta2AccountSpecCreds {
    /**
    * Credentials file.
    */
    'file'?: string;
    'secret'?: IoNatsJetstreamV1beta2AccountSpecCredsSecret;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "file",
            "baseName": "file",
            "type": "string"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "IoNatsJetstreamV1beta2AccountSpecCredsSecret"
        }    ];

    static getAttributeTypeMap() {
        return IoNatsJetstreamV1beta2AccountSpecCreds.attributeTypeMap;
    }
}
