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
* CertSecretRef can be given the name of a secret containing a PEM-encoded CA certificate (`caFile`)
*/
export class IoFluxcdToolkitNotificationV1beta1ProviderSpecCertSecretRef {
    /**
    * Name of the referent.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitNotificationV1beta1ProviderSpecCertSecretRef.attributeTypeMap;
    }
}

