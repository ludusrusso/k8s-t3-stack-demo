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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteAction';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerService } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerService';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerUrlRedirect } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerUrlRedirect';

export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInner {
    /**
    * The list of path patterns to match. Each must start with / and the only place a \\* is allowed is at the end following a /. The string fed to the path matcher does not include any text after the first ? or #, and those chars are not allowed here.
    */
    'paths': Array<string>;
    'routeAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteAction;
    'service'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerService;
    'urlRedirect'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerUrlRedirect;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<string>"
        },
        {
            "name": "routeAction",
            "baseName": "routeAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerRouteAction"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerService"
        },
        {
            "name": "urlRedirect",
            "baseName": "urlRedirect",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInnerUrlRedirect"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerPathRuleInner.attributeTypeMap;
    }
}

