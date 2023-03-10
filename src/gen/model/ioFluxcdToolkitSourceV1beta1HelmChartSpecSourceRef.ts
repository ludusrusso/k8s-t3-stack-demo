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
* The reference to the Source the chart is available at.
*/
export class IoFluxcdToolkitSourceV1beta1HelmChartSpecSourceRef {
    /**
    * APIVersion of the referent.
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent, valid values are (\'HelmRepository\', \'GitRepository\', \'Bucket\').
    */
    'kind': IoFluxcdToolkitSourceV1beta1HelmChartSpecSourceRef.KindEnum;
    /**
    * Name of the referent.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "IoFluxcdToolkitSourceV1beta1HelmChartSpecSourceRef.KindEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoFluxcdToolkitSourceV1beta1HelmChartSpecSourceRef.attributeTypeMap;
    }
}

export namespace IoFluxcdToolkitSourceV1beta1HelmChartSpecSourceRef {
    export enum KindEnum {
        HelmRepository = <any> 'HelmRepository',
        GitRepository = <any> 'GitRepository',
        Bucket = <any> 'Bucket'
    }
}
