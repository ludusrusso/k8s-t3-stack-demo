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
import { ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner } from './comGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeRouterPeerStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * The resource that configures and manages this BGP peer.  * \'MANAGED_BY_USER\' is the default value and can be managed by you or other users * \'MANAGED_BY_ATTACHMENT\' is a BGP peer that is configured and managed by Cloud Interconnect, specifically by an InterconnectAttachment of type PARTNER. Google automatically creates, updates, and deletes this type of BGP peer when the PARTNER InterconnectAttachment is created, updated, or deleted.
    */
    'managementType'?: string;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "managementType",
            "baseName": "managementType",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeRouterPeerStatus.attributeTypeMap;
    }
}
