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

export class ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyStatus {
    /**
    * Conditions represent the latest available observation of the resource\'s current state.
    */
    'conditions'?: Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>;
    /**
    * Creation timestamp in RFC3339 text format.
    */
    'creationTimestamp'?: string;
    /**
    * Fingerprint of the resource. This field is used internally during updates of this resource.
    */
    'fingerprint'?: string;
    /**
    * The unique identifier for the resource. This identifier is defined by the server.
    */
    'id'?: string;
    /**
    * ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
    */
    'observedGeneration'?: number;
    /**
    * Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
    */
    'ruleTupleCount'?: number;
    /**
    * Server-defined URL for the resource.
    */
    'selfLink'?: string;
    /**
    * Server-defined URL for this resource with the resource id.
    */
    'selfLinkWithId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<ComGoogleCloudCnrmAccesscontextmanagerV1beta1AccessContextManagerAccessLevelStatusConditionsInner>"
        },
        {
            "name": "creationTimestamp",
            "baseName": "creationTimestamp",
            "type": "string"
        },
        {
            "name": "fingerprint",
            "baseName": "fingerprint",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "ruleTupleCount",
            "baseName": "ruleTupleCount",
            "type": "number"
        },
        {
            "name": "selfLink",
            "baseName": "selfLink",
            "type": "string"
        },
        {
            "name": "selfLinkWithId",
            "baseName": "selfLinkWithId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeFirewallPolicyStatus.attributeTypeMap;
    }
}

