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

export class ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobStatusAppEngineHttpTargetAppEngineRouting {
    /**
    * Output only. The host that the job is sent to. For more information about how App Engine requests are routed, see [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed). The host is constructed as: * `host = [application_domain_name]` `| [service] + \'.\' + [application_domain_name]` `| [version] + \'.\' + [application_domain_name]` `| [version_dot_service]+ \'.\' + [application_domain_name]` `| [instance] + \'.\' + [application_domain_name]` `| [instance_dot_service] + \'.\' + [application_domain_name]` `| [instance_dot_version] + \'.\' + [application_domain_name]` `| [instance_dot_version_dot_service] + \'.\' + [application_domain_name]` * `application_domain_name` = The domain name of the app, for example .appspot.com, which is associated with the job\'s project ID. * `service =` service * `version =` version * `version_dot_service =` version `+ \'.\' +` service * `instance =` instance * `instance_dot_service =` instance `+ \'.\' +` service * `instance_dot_version =` instance `+ \'.\' +` version * `instance_dot_version_dot_service =` instance `+ \'.\' +` version `+ \'.\' +` service If service is empty, then the job will be sent to the service which is the default service when the job is attempted. If version is empty, then the job will be sent to the version which is the default version when the job is attempted. If instance is empty, then the job will be sent to an instance which is available when the job is attempted. If service, version, or instance is invalid, then the job will be sent to the default version of the default service when the job is attempted.
    */
    'host'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobStatusAppEngineHttpTargetAppEngineRouting.attributeTypeMap;
    }
}

