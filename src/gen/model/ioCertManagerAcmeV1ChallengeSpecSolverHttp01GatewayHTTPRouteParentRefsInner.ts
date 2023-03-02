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
* ParentRef identifies an API object (usually a Gateway) that can be considered a parent of this resource (usually a route). The only kind of parent resource with \"Core\" support is Gateway. This API may be extended in the future to support additional kinds of parent resources, such as HTTPRoute.   The API object must be valid in the cluster; the Group and Kind must be registered in the cluster for this reference to be valid.   References to objects with invalid Group and Kind are not valid, and must be rejected by the implementation, with appropriate Conditions set on the containing object.
*/
export class IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner {
    /**
    * Group is the group of the referent.   Support: Core
    */
    'group'?: string;
    /**
    * Kind is kind of the referent.   Support: Core (Gateway) Support: Custom (Other Resources)
    */
    'kind'?: string;
    /**
    * Name is the name of the referent.   Support: Core
    */
    'name': string;
    /**
    * Namespace is the namespace of the referent. When unspecified (or empty string), this refers to the local namespace of the Route.   Support: Core
    */
    'namespace'?: string;
    /**
    * SectionName is the name of a section within the target resource. In the following resources, SectionName is interpreted as the following:   * Gateway: Listener Name   Implementations MAY choose to support attaching Routes to other resources. If that is the case, they MUST clearly document how SectionName is interpreted.   When unspecified (empty string), this will reference the entire resource. For the purpose of status, an attachment is considered successful if at least one section in the parent resource accepts it. For example, Gateway listeners can restrict which Routes can attach to them by Route kind, namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from the referencing Route, the Route MUST be considered successfully attached. If no Gateway listeners accept attachment from this Route, the Route MUST be considered detached from the Gateway.   Support: Core
    */
    'sectionName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "sectionName",
            "baseName": "sectionName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoCertManagerAcmeV1ChallengeSpecSolverHttp01GatewayHTTPRouteParentRefsInner.attributeTypeMap;
    }
}
