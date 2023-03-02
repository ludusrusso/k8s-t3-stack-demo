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
import { ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicyPerTryTimeout } from './comGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicyPerTryTimeout';

/**
* Specifies the retry policy associated with this route.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicy {
    /**
    * Specifies the allowed number retries. This number must be > 0. If not specified, defaults to 1.
    */
    'numRetries'?: number;
    'perTryTimeout'?: ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicyPerTryTimeout;
    /**
    * Specfies one or more conditions when this retry rule applies. Valid values are:  * 5xx: Loadbalancer will attempt a retry if the backend service responds with any 5xx response code,   or if the backend service does not respond at all, example: disconnects, reset, read timeout, * connection failure, and refused streams. * gateway-error: Similar to 5xx, but only applies to response codes 502, 503 or 504. * connect-failure: Loadbalancer will retry on failures connecting to backend services,   for example due to connection timeouts. * retriable-4xx: Loadbalancer will retry for retriable 4xx response codes.   Currently the only retriable error supported is 409. * refused-stream:Loadbalancer will retry if the backend service resets the stream with a REFUSED_STREAM error code.   This reset type indicates that it is safe to retry. * cancelled: Loadbalancer will retry if the gRPC status code in the response header is set to cancelled * deadline-exceeded: Loadbalancer will retry if the gRPC status code in the response header is set to deadline-exceeded * resource-exhausted: Loadbalancer will retry if the gRPC status code in the response header is set to resource-exhausted * unavailable: Loadbalancer will retry if the gRPC status code in the response header is set to unavailable.
    */
    'retryConditions'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numRetries",
            "baseName": "numRetries",
            "type": "number"
        },
        {
            "name": "perTryTimeout",
            "baseName": "perTryTimeout",
            "type": "ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicyPerTryTimeout"
        },
        {
            "name": "retryConditions",
            "baseName": "retryConditions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeURLMapSpecDefaultRouteActionRetryPolicy.attributeTypeMap;
    }
}

