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
import { ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTargetAppEngineRouting } from './comGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTargetAppEngineRouting';

/**
* App Engine HTTP target.
*/
export class ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTarget {
    'appEngineRouting'?: ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTargetAppEngineRouting;
    /**
    * Body. HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.
    */
    'body'?: string;
    /**
    * HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. Cloud Scheduler sets some headers to default values: * `User-Agent`: By default, this header is `\"App Engine-Google; (+http://code.google.com/appengine)\"`. This header can be modified, but Cloud Scheduler will append `\"App Engine-Google; (+http://code.google.com/appengine)\"` to the modified `User-Agent`. * `X-CloudScheduler`: This header will be set to true. The headers below are output only. They cannot be set or overridden: * `X-Google-*`: For Google internal use only. * `X-App Engine-*`: For Google internal use only. In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler.
    */
    'headers'?: { [key: string]: string; };
    /**
    * The HTTP method to use for the request. PATCH and OPTIONS are not permitted. Possible values: HTTP_METHOD_UNSPECIFIED, POST, GET, HEAD, PUT, DELETE, PATCH, OPTIONS
    */
    'httpMethod'?: string;
    /**
    * The relative URI. The relative URL must begin with \"/\" and must be a valid HTTP relative URL. It can contain a path, query string arguments, and `#` fragments. If the relative URL is empty, then the root path \"/\" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.
    */
    'relativeUri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appEngineRouting",
            "baseName": "appEngineRouting",
            "type": "ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTargetAppEngineRouting"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "httpMethod",
            "baseName": "httpMethod",
            "type": "string"
        },
        {
            "name": "relativeUri",
            "baseName": "relativeUri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmCloudschedulerV1beta1CloudSchedulerJobSpecAppEngineHttpTarget.attributeTypeMap;
    }
}
