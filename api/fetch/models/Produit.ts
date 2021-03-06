// tslint:disable
/**
 * stock-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Produit
 */
export interface Produit {
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    lieuInventaire?: string;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    client?: string;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    emplacement?: string;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    designation?: string;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    precision?: string;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    typeDeStock?: string;
    /**
     * 
     * @type {number}
     * @memberof Produit
     */
    quantite: number;
    /**
     * 
     * @type {number}
     * @memberof Produit
     */
    prixUnitHt: number;
    /**
     * 
     * @type {number}
     * @memberof Produit
     */
    totalHt: number;
    /**
     * 
     * @type {string}
     * @memberof Produit
     */
    codebar: string;
    /**
     * 
     * @type {number}
     * @memberof Produit
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Produit
     */
    accountId?: number;
}

export function ProduitFromJSON(json: any): Produit {
    return {
        'lieuInventaire': !exists(json, 'lieuInventaire') ? undefined : json['lieuInventaire'],
        'client': !exists(json, 'client') ? undefined : json['client'],
        'emplacement': !exists(json, 'emplacement') ? undefined : json['emplacement'],
        'designation': !exists(json, 'designation') ? undefined : json['designation'],
        'precision': !exists(json, 'precision') ? undefined : json['precision'],
        'typeDeStock': !exists(json, 'typeDeStock') ? undefined : json['typeDeStock'],
        'quantite': json['quantite'],
        'prixUnitHt': json['prixUnitHt'],
        'totalHt': json['totalHt'],
        'codebar': json['codebar'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
    };
}

export function ProduitToJSON(value?: Produit): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'lieuInventaire': value.lieuInventaire,
        'client': value.client,
        'emplacement': value.emplacement,
        'designation': value.designation,
        'precision': value.precision,
        'typeDeStock': value.typeDeStock,
        'quantite': value.quantite,
        'prixUnitHt': value.prixUnitHt,
        'totalHt': value.totalHt,
        'codebar': value.codebar,
        'id': value.id,
        'accountId': value.accountId,
    };
}


