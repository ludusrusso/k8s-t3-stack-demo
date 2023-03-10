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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteAction';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultService } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultService';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultUrlRedirect } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultUrlRedirect';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHeaderAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHeaderAction';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInner } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecTestInner } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecTestInner';

export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpec {
    'defaultRouteAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteAction;
    'defaultService'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultService;
    'defaultUrlRedirect'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultUrlRedirect;
    /**
    * An optional description of this resource. Provide this property when you create the resource.
    */
    'description'?: string;
    'headerAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHeaderAction;
    /**
    * The list of HostRules to use against the URL.
    */
    'hostRule'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner>;
    /**
    * Location represents the geographical location of the ComputeURLMap. Specify a region name or \"global\" for global resources. Reference: GCP definition of regions/zones (https://cloud.google.com/compute/docs/regions-zones/)
    */
    'location': string;
    /**
    * The list of named PathMatchers to use against the URL.
    */
    'pathMatcher'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInner>;
    /**
    * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
    */
    'resourceID'?: string;
    /**
    * The list of expected URL mappings. Requests to update this UrlMap will succeed only if all of the test cases pass.
    */
    'test'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecTestInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultRouteAction",
            "baseName": "defaultRouteAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteAction"
        },
        {
            "name": "defaultService",
            "baseName": "defaultService",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultService"
        },
        {
            "name": "defaultUrlRedirect",
            "baseName": "defaultUrlRedirect",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultUrlRedirect"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "headerAction",
            "baseName": "headerAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHeaderAction"
        },
        {
            "name": "hostRule",
            "baseName": "hostRule",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecHostRuleInner>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "pathMatcher",
            "baseName": "pathMatcher",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInner>"
        },
        {
            "name": "resourceID",
            "baseName": "resourceID",
            "type": "string"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecTestInner>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpec.attributeTypeMap;
    }
}

