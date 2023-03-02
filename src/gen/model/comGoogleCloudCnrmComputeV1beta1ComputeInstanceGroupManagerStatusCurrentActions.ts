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
* [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusCurrentActions {
    /**
    * [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from the managed instance group without deleting it.
    */
    'abandoning'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails to create any of these instances, it tries again until it creates the instance successfully. If you have disabled creation retries, this field will not be populated; instead, the `creatingWithoutRetries` field will be populated.
    */
    'creating'?: number;
    /**
    * [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If the group fails to create any of these instances, it decreases the group\'s `targetSize` value accordingly.
    */
    'creatingWithoutRetries'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
    */
    'deleting'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
    */
    'none'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated. Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
    */
    'recreating'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a recreate action. For example, setting or removing target pools for the instance.
    */
    'refreshing'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
    */
    'restarting'?: number;
    /**
    * [Output Only] The number of instances in the managed instance group that are being verified. See the `managedInstances[].currentAction` property in the `listManagedInstances` method documentation.
    */
    'verifying'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "abandoning",
            "baseName": "abandoning",
            "type": "number"
        },
        {
            "name": "creating",
            "baseName": "creating",
            "type": "number"
        },
        {
            "name": "creatingWithoutRetries",
            "baseName": "creatingWithoutRetries",
            "type": "number"
        },
        {
            "name": "deleting",
            "baseName": "deleting",
            "type": "number"
        },
        {
            "name": "none",
            "baseName": "none",
            "type": "number"
        },
        {
            "name": "recreating",
            "baseName": "recreating",
            "type": "number"
        },
        {
            "name": "refreshing",
            "baseName": "refreshing",
            "type": "number"
        },
        {
            "name": "restarting",
            "baseName": "restarting",
            "type": "number"
        },
        {
            "name": "verifying",
            "baseName": "verifying",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeInstanceGroupManagerStatusCurrentActions.attributeTypeMap;
    }
}
