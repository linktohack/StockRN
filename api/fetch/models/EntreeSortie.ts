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
 * @interface EntreeSortie
 */
export interface EntreeSortie {
    /**
     * 
     * @type {Date}
     * @memberof EntreeSortie
     */
    dateEntreeSortie?: Date;
    /**
     * 
     * @type {string}
     * @memberof EntreeSortie
     */
    motif: string;
    /**
     * 
     * @type {string}
     * @memberof EntreeSortie
     */
    projet?: string;
    /**
     * 
     * @type {number}
     * @memberof EntreeSortie
     */
    quantite: number;
    /**
     * 
     * @type {number}
     * @memberof EntreeSortie
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof EntreeSortie
     */
    produitId?: number;
    /**
     * 
     * @type {number}
     * @memberof EntreeSortie
     */
    accountId?: number;
}

export function EntreeSortieFromJSON(json: any): EntreeSortie {
    return {
        'dateEntreeSortie': !exists(json, 'dateEntreeSortie') ? undefined : new Date(json['dateEntreeSortie']),
        'motif': json['motif'],
        'projet': !exists(json, 'projet') ? undefined : json['projet'],
        'quantite': json['quantite'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'produitId': !exists(json, 'produitId') ? undefined : json['produitId'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
    };
}

export function EntreeSortieToJSON(value?: EntreeSortie): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'dateEntreeSortie': value.dateEntreeSortie === undefined ? undefined : value.dateEntreeSortie.toISOString(),
        'motif': value.motif,
        'projet': value.projet,
        'quantite': value.quantite,
        'id': value.id,
        'produitId': value.produitId,
        'accountId': value.accountId,
    };
}


