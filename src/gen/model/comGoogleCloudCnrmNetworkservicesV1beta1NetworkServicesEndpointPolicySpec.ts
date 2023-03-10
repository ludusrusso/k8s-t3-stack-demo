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
import { ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef } from './comGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecAuthorizationPolicyRef } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecAuthorizationPolicyRef';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecClientTlsPolicyRef } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecClientTlsPolicyRef';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecServerTlsPolicyRef } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecServerTlsPolicyRef';
import { ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecTrafficPortSelector } from './comGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecTrafficPortSelector';

export class ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpec {
    'authorizationPolicyRef'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecAuthorizationPolicyRef;
    'clientTlsPolicyRef'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecClientTlsPolicyRef;
    /**
    * Optional. A free-text description of the resource. Max length 1024 characters.
    */
    'description'?: string;
    'endpointMatcher': ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher;
    /**
    * Immutable. The location for the resource
    */
    'location': string;
    'projectRef': ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    'serverTlsPolicyRef'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecServerTlsPolicyRef;
    'trafficPortSelector'?: ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecTrafficPortSelector;
    /**
    * Required. The type of endpoint config. This is primarily used to validate the configuration. Possible values: ENDPOINT_CONFIG_SELECTOR_TYPE_UNSPECIFIED, SIDECAR_PROXY, GRPC_SERVER
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authorizationPolicyRef",
            "baseName": "authorizationPolicyRef",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecAuthorizationPolicyRef"
        },
        {
            "name": "clientTlsPolicyRef",
            "baseName": "clientTlsPolicyRef",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecClientTlsPolicyRef"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "endpointMatcher",
            "baseName": "endpointMatcher",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecEndpointMatcher"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "projectRef",
            "baseName": "projectRef",
            "type": "ComGoogleCloudCnrmBinaryauthorizationV1beta1BinaryAuthorizationAttestorSpecProjectRef"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "serverTlsPolicyRef",
            "baseName": "serverTlsPolicyRef",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecServerTlsPolicyRef"
        },
        {
            "name": "trafficPortSelector",
            "baseName": "trafficPortSelector",
            "type": "ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpecTrafficPortSelector"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmNetworkservicesV1beta1NetworkServicesEndpointPolicySpec.attributeTypeMap;
    }
}

