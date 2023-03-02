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
* Optional. A CEL expression that may be used to validate the resolved X.509 Subject and/or Subject Alternative Name before a certificate is signed. To see the full allowed syntax and some examples, see https://cloud.google.com/certificate-authority-service/docs/using-cel
*/
export class ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyIdentityConstraintsCelExpression {
    /**
    * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
    */
    'description'?: string;
    /**
    * Textual representation of an expression in Common Expression Language syntax.
    */
    'expression'?: string;
    /**
    * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
    */
    'location'?: string;
    /**
    * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
    */
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComGoogleCloudCnrmPrivatecaV1beta1PrivateCACAPoolSpecIssuancePolicyIdentityConstraintsCelExpression.attributeTypeMap;
    }
}

