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
import { ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo } from './comGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo';

/**
* Contains information needed to make an HTTP or HTTPS check.
*/
export class ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck {
    'authInfo'?: ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo;
    /**
    * The request body associated with the HTTP POST request. If `content_type` is `URL_ENCODED`, the body passed in must be URL-encoded. Users can provide a `Content-Length` header via the `headers` field or the API will do so. If the `request_method` is `GET` and `body` is not empty, the API will return an error. The maximum byte size is 1 megabyte. Note: As with all `bytes` fields JSON representations are base64 encoded. e.g.: \"foo=bar\" in URL-encoded form is \"foo%3Dbar\" and in base64 encoding is \"Zm9vJTI1M0RiYXI=\".
    */
    'body'?: string;
    /**
    * Immutable. The content type to use for the check.  Possible values: TYPE_UNSPECIFIED, URL_ENCODED
    */
    'contentType'?: string;
    /**
    * The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100.
    */
    'headers'?: { [key: string]: string; };
    /**
    * Immutable. Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if `mask_headers` is set to `true` then the headers will be obscured with `******.`
    */
    'maskHeaders'?: boolean;
    /**
    * Optional (defaults to \"/\"). The path to the page against which to run the check. Will be combined with the `host` (specified within the `monitored_resource`) and `port` to construct the full URL. If the provided path does not begin with \"/\", a \"/\" will be prepended automatically.
    */
    'path'?: string;
    /**
    * Optional (defaults to 80 when `use_ssl` is `false`, and 443 when `use_ssl` is `true`). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the `monitored_resource`) and `path` to construct the full URL.
    */
    'port'?: number;
    /**
    * Immutable. The HTTP request method to use for the check. If set to `METHOD_UNSPECIFIED` then `request_method` defaults to `GET`.
    */
    'requestMethod'?: string;
    /**
    * If `true`, use HTTPS instead of HTTP to run the check.
    */
    'useSsl'?: boolean;
    /**
    * Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where `monitored_resource` is set to `uptime_url`. If `use_ssl` is `false`, setting `validate_ssl` to `true` has no effect.
    */
    'validateSsl'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authInfo",
            "baseName": "authInfo",
            "type": "ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "maskHeaders",
            "baseName": "maskHeaders",
            "type": "boolean"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "requestMethod",
            "baseName": "requestMethod",
            "type": "string"
        },
        {
            "name": "useSsl",
            "baseName": "useSsl",
            "type": "boolean"
        },
        {
            "name": "validateSsl",
            "baseName": "validateSsl",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmMonitoringV1beta1MonitoringUptimeCheckConfigSpecHttpCheck.attributeTypeMap;
    }
}
