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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerHeaderAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerHeaderAction';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInner } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInner';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerRouteAction } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerRouteAction';
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerUrlRedirect } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerUrlRedirect';

export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInner {
    'headerAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerHeaderAction;
    /**
    * The rules for determining a match.
    */
    'matchRules'?: Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInner>;
    /**
    * For routeRules within a given pathMatcher, priority determines the order in which load balancer will interpret routeRules. RouteRules are evaluated in order of priority, from the lowest to highest number. The priority of a rule decreases as its number increases (1, 2, 3, N+1). The first rule that matches the request is applied.  You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 0 and 2147483647 inclusive.  Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.
    */
    'priority': number;
    'routeAction'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerRouteAction;
    /**
    * The region backend service resource to which traffic is directed if this rule is matched. If routeAction is additionally specified, advanced routing actions like URL Rewrites, etc. take effect prior to sending the request to the backend. However, if service is specified, routeAction cannot contain any weightedBackendService s. Conversely, if routeAction specifies any weightedBackendServices, service must not be specified. Only one of urlRedirect, service or routeAction.weightedBackendService must be set.
    */
    'service'?: string;
    'urlRedirect'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerUrlRedirect;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "headerAction",
            "baseName": "headerAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerHeaderAction"
        },
        {
            "name": "matchRules",
            "baseName": "matchRules",
            "type": "Array<ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerMatchRulesInner>"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "routeAction",
            "baseName": "routeAction",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerRouteAction"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "string"
        },
        {
            "name": "urlRedirect",
            "baseName": "urlRedirect",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInnerUrlRedirect"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecPathMatcherInnerRouteRulesInner.attributeTypeMap;
    }
}

