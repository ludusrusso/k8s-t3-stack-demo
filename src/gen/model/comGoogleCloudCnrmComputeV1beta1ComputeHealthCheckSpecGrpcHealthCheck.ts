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
* A nested object resource.
*/
export class ComGoogleCloudCnrmComputeV1beta1ComputeHealthCheckSpecGrpcHealthCheck {
    /**
    * The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:   - Empty serviceName means the overall status of all services at the backend.   - Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service. The grpcServiceName can only be ASCII.
    */
    'grpcServiceName'?: string;
    /**
    * The port number for the health check request. Must be specified if portName and portSpecification are not set or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
    */
    'port'?: number;
    /**
    * Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
    */
    'portName'?: string;
    /**
    * Specifies how port is selected for health checking, can be one of the following values:    * \'USE_FIXED_PORT\': The port number in \'port\' is used for health checking.    * \'USE_NAMED_PORT\': The \'portName\' is used for health checking.    * \'USE_SERVING_PORT\': For NetworkEndpointGroup, the port specified for each   network endpoint is used for health checking. For other backends, the   port or named port specified in the Backend Service is used for health   checking.  If not specified, gRPC health check follows behavior specified in \'port\' and \'portName\' fields. Possible values: [\"USE_FIXED_PORT\", \"USE_NAMED_PORT\", \"USE_SERVING_PORT\"].
    */
    'portSpecification'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "grpcServiceName",
            "baseName": "grpcServiceName",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "portName",
            "baseName": "portName",
            "type": "string"
        },
        {
            "name": "portSpecification",
            "baseName": "portSpecification",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmComputeV1beta1ComputeHealthCheckSpecGrpcHealthCheck.attributeTypeMap;
    }
}

