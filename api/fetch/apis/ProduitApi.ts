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


import * as runtime from '../runtime';
import {
    Account,
    AccountFromJSON,
    AccountToJSON,
    EntreeSortie,
    EntreeSortieFromJSON,
    EntreeSortieToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponse2002,
    InlineResponse2002FromJSON,
    InlineResponse2002ToJSON,
    Produit,
    ProduitFromJSON,
    ProduitToJSON,
    UNKNOWN_BASE_TYPE,
    UNKNOWN_BASE_TYPEFromJSON,
    UNKNOWN_BASE_TYPEToJSON,
} from '../models';

export interface ProduitCountRequest {
    where?: string;
}

export interface ProduitCreateRequest {
    data?: Produit;
}

export interface ProduitCreateChangeStreamGetProduitsChangeStreamRequest {
    options?: string;
}

export interface ProduitCreateChangeStreamPostProduitsChangeStreamRequest {
    UNKNOWN_BASE_TYPE?: UNKNOWN_BASE_TYPE;
}

export interface ProduitDeleteByIdRequest {
    id: string;
}

export interface ProduitExistsGetProduitsidExistsRequest {
    id: string;
}

export interface ProduitExistsHeadProduitsidRequest {
    id: string;
}

export interface ProduitFindRequest {
    filter?: string;
}

export interface ProduitFindByIdRequest {
    id: string;
    filter?: string;
}

export interface ProduitFindOneRequest {
    filter?: string;
}

export interface ProduitPatchOrCreateRequest {
    data?: Produit;
}

export interface ProduitPrototypeCountEntreeSortiesRequest {
    id: string;
    where?: string;
}

export interface ProduitPrototypeCreateEntreeSortiesRequest {
    id: string;
    data?: EntreeSortie;
}

export interface ProduitPrototypeDeleteEntreeSortiesRequest {
    id: string;
}

export interface ProduitPrototypeDestroyByIdEntreeSortiesRequest {
    id: string;
    fk: string;
}

export interface ProduitPrototypeFindByIdEntreeSortiesRequest {
    id: string;
    fk: string;
}

export interface ProduitPrototypeGetAccountRequest {
    id: string;
    refresh?: boolean;
}

export interface ProduitPrototypeGetEntreeSortiesRequest {
    id: string;
    filter?: string;
}

export interface ProduitPrototypePatchAttributesRequest {
    id: string;
    data?: Produit;
}

export interface ProduitPrototypeUpdateByIdEntreeSortiesRequest {
    id: string;
    fk: string;
    data?: EntreeSortie;
}

export interface ProduitReplaceByIdPostProduitsidReplaceRequest {
    id: string;
    data?: Produit;
}

export interface ProduitReplaceByIdPutProduitsidRequest {
    id: string;
    data?: Produit;
}

export interface ProduitReplaceOrCreatePostProduitsReplaceOrCreateRequest {
    data?: Produit;
}

export interface ProduitReplaceOrCreatePutProduitsRequest {
    data?: Produit;
}

export interface ProduitUpdateAllRequest {
    where?: string;
    data?: Produit;
}

export interface ProduitUpsertWithWhereRequest {
    where?: string;
    data?: Produit;
}

/**
 * no description
 */
export class ProduitApi extends runtime.BaseAPI {

    /**
     * Count instances of the model matched by where from the data source.
     */
    async produitCountRaw(requestParameters: ProduitCountRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Count instances of the model matched by where from the data source.
     */
    async produitCount(requestParameters: ProduitCountRequest): Promise<InlineResponse200> {
        const response = await this.produitCountRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new instance of the model and persist it into the data source.
     */
    async produitCreateRaw(requestParameters: ProduitCreateRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Create a new instance of the model and persist it into the data source.
     */
    async produitCreate(requestParameters: ProduitCreateRequest): Promise<Produit> {
        const response = await this.produitCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a change stream.
     */
    async produitCreateChangeStreamGetProduitsChangeStreamRaw(requestParameters: ProduitCreateChangeStreamGetProduitsChangeStreamRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.options !== undefined) {
            queryParameters['options'] = requestParameters.options;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/change-stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Create a change stream.
     */
    async produitCreateChangeStreamGetProduitsChangeStream(requestParameters: ProduitCreateChangeStreamGetProduitsChangeStreamRequest): Promise<Blob> {
        const response = await this.produitCreateChangeStreamGetProduitsChangeStreamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a change stream.
     */
    async produitCreateChangeStreamPostProduitsChangeStreamRaw(requestParameters: ProduitCreateChangeStreamPostProduitsChangeStreamRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/change-stream`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UNKNOWN_BASE_TYPEToJSON(requestParameters.UNKNOWN_BASE_TYPE),
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Create a change stream.
     */
    async produitCreateChangeStreamPostProduitsChangeStream(requestParameters: ProduitCreateChangeStreamPostProduitsChangeStreamRequest): Promise<Blob> {
        const response = await this.produitCreateChangeStreamPostProduitsChangeStreamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a model instance by {{id}} from the data source.
     */
    async produitDeleteByIdRaw(requestParameters: ProduitDeleteByIdRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitDeleteById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete a model instance by {{id}} from the data source.
     */
    async produitDeleteById(requestParameters: ProduitDeleteByIdRequest): Promise<object> {
        const response = await this.produitDeleteByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Check whether a model instance exists in the data source.
     */
    async produitExistsGetProduitsidExistsRaw(requestParameters: ProduitExistsGetProduitsidExistsRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitExistsGetProduitsidExists.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/exists`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Check whether a model instance exists in the data source.
     */
    async produitExistsGetProduitsidExists(requestParameters: ProduitExistsGetProduitsidExistsRequest): Promise<InlineResponse2001> {
        const response = await this.produitExistsGetProduitsidExistsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Check whether a model instance exists in the data source.
     */
    async produitExistsHeadProduitsidRaw(requestParameters: ProduitExistsHeadProduitsidRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitExistsHeadProduitsid.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Check whether a model instance exists in the data source.
     */
    async produitExistsHeadProduitsid(requestParameters: ProduitExistsHeadProduitsidRequest): Promise<InlineResponse2001> {
        const response = await this.produitExistsHeadProduitsidRaw(requestParameters);
        return await response.value();
    }

    /**
     * Find all instances of the model matched by filter from the data source.
     */
    async produitFindRaw(requestParameters: ProduitFindRequest): Promise<runtime.ApiResponse<Array<Produit>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProduitFromJSON));
    }

    /**
     * Find all instances of the model matched by filter from the data source.
     */
    async produitFind(requestParameters: ProduitFindRequest): Promise<Array<Produit>> {
        const response = await this.produitFindRaw(requestParameters);
        return await response.value();
    }

    /**
     * Find a model instance by {{id}} from the data source.
     */
    async produitFindByIdRaw(requestParameters: ProduitFindByIdRequest): Promise<runtime.ApiResponse<Produit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitFindById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Find a model instance by {{id}} from the data source.
     */
    async produitFindById(requestParameters: ProduitFindByIdRequest): Promise<Produit> {
        const response = await this.produitFindByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Find first instance of the model matched by filter from the data source.
     */
    async produitFindOneRaw(requestParameters: ProduitFindOneRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/findOne`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Find first instance of the model matched by filter from the data source.
     */
    async produitFindOne(requestParameters: ProduitFindOneRequest): Promise<Produit> {
        const response = await this.produitFindOneRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch an existing model instance or insert a new one into the data source.
     */
    async produitPatchOrCreateRaw(requestParameters: ProduitPatchOrCreateRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Patch an existing model instance or insert a new one into the data source.
     */
    async produitPatchOrCreate(requestParameters: ProduitPatchOrCreateRequest): Promise<Produit> {
        const response = await this.produitPatchOrCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Compte entreeSorties de Produit.
     */
    async produitPrototypeCountEntreeSortiesRaw(requestParameters: ProduitPrototypeCountEntreeSortiesRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeCountEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties/count`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Compte entreeSorties de Produit.
     */
    async produitPrototypeCountEntreeSorties(requestParameters: ProduitPrototypeCountEntreeSortiesRequest): Promise<InlineResponse200> {
        const response = await this.produitPrototypeCountEntreeSortiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Crée une instance dans entreeSorties de ce modèle.
     */
    async produitPrototypeCreateEntreeSortiesRaw(requestParameters: ProduitPrototypeCreateEntreeSortiesRequest): Promise<runtime.ApiResponse<EntreeSortie>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeCreateEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntreeSortieToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntreeSortieFromJSON(jsonValue));
    }

    /**
     * Crée une instance dans entreeSorties de ce modèle.
     */
    async produitPrototypeCreateEntreeSorties(requestParameters: ProduitPrototypeCreateEntreeSortiesRequest): Promise<EntreeSortie> {
        const response = await this.produitPrototypeCreateEntreeSortiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Supprime tous les entreeSorties de ce modèle.
     */
    async produitPrototypeDeleteEntreeSortiesRaw(requestParameters: ProduitPrototypeDeleteEntreeSortiesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeDeleteEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Supprime tous les entreeSorties de ce modèle.
     */
    async produitPrototypeDeleteEntreeSorties(requestParameters: ProduitPrototypeDeleteEntreeSortiesRequest): Promise<void> {
        await this.produitPrototypeDeleteEntreeSortiesRaw(requestParameters);
    }

    /**
     * Supprimez un élément lié par id pour entreeSorties.
     */
    async produitPrototypeDestroyByIdEntreeSortiesRaw(requestParameters: ProduitPrototypeDestroyByIdEntreeSortiesRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeDestroyByIdEntreeSorties.');
        }

        if (requestParameters.fk === null || requestParameters.fk === undefined) {
            throw new runtime.RequiredError('fk','Required parameter requestParameters.fk was null or undefined when calling produitPrototypeDestroyByIdEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties/{fk}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"fk"}}`, encodeURIComponent(String(requestParameters.fk))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Supprimez un élément lié par id pour entreeSorties.
     */
    async produitPrototypeDestroyByIdEntreeSorties(requestParameters: ProduitPrototypeDestroyByIdEntreeSortiesRequest): Promise<void> {
        await this.produitPrototypeDestroyByIdEntreeSortiesRaw(requestParameters);
    }

    /**
     * Recherchez un élément lié par id pour entreeSorties.
     */
    async produitPrototypeFindByIdEntreeSortiesRaw(requestParameters: ProduitPrototypeFindByIdEntreeSortiesRequest): Promise<runtime.ApiResponse<EntreeSortie>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeFindByIdEntreeSorties.');
        }

        if (requestParameters.fk === null || requestParameters.fk === undefined) {
            throw new runtime.RequiredError('fk','Required parameter requestParameters.fk was null or undefined when calling produitPrototypeFindByIdEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties/{fk}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"fk"}}`, encodeURIComponent(String(requestParameters.fk))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntreeSortieFromJSON(jsonValue));
    }

    /**
     * Recherchez un élément lié par id pour entreeSorties.
     */
    async produitPrototypeFindByIdEntreeSorties(requestParameters: ProduitPrototypeFindByIdEntreeSortiesRequest): Promise<EntreeSortie> {
        const response = await this.produitPrototypeFindByIdEntreeSortiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Extrait la relation belongsTo account.
     */
    async produitPrototypeGetAccountRaw(requestParameters: ProduitPrototypeGetAccountRequest): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeGetAccount.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.refresh !== undefined) {
            queryParameters['refresh'] = requestParameters.refresh;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/account`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Extrait la relation belongsTo account.
     */
    async produitPrototypeGetAccount(requestParameters: ProduitPrototypeGetAccountRequest): Promise<Account> {
        const response = await this.produitPrototypeGetAccountRaw(requestParameters);
        return await response.value();
    }

    /**
     * Demandes entreeSorties de Produit.
     */
    async produitPrototypeGetEntreeSortiesRaw(requestParameters: ProduitPrototypeGetEntreeSortiesRequest): Promise<runtime.ApiResponse<Array<EntreeSortie>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeGetEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntreeSortieFromJSON));
    }

    /**
     * Demandes entreeSorties de Produit.
     */
    async produitPrototypeGetEntreeSorties(requestParameters: ProduitPrototypeGetEntreeSortiesRequest): Promise<Array<EntreeSortie>> {
        const response = await this.produitPrototypeGetEntreeSortiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch attributes for a model instance and persist it into the data source.
     */
    async produitPrototypePatchAttributesRaw(requestParameters: ProduitPrototypePatchAttributesRequest): Promise<runtime.ApiResponse<Produit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypePatchAttributes.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Patch attributes for a model instance and persist it into the data source.
     */
    async produitPrototypePatchAttributes(requestParameters: ProduitPrototypePatchAttributesRequest): Promise<Produit> {
        const response = await this.produitPrototypePatchAttributesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mettez à jour un élément lié par id pour entreeSorties.
     */
    async produitPrototypeUpdateByIdEntreeSortiesRaw(requestParameters: ProduitPrototypeUpdateByIdEntreeSortiesRequest): Promise<runtime.ApiResponse<EntreeSortie>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitPrototypeUpdateByIdEntreeSorties.');
        }

        if (requestParameters.fk === null || requestParameters.fk === undefined) {
            throw new runtime.RequiredError('fk','Required parameter requestParameters.fk was null or undefined when calling produitPrototypeUpdateByIdEntreeSorties.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/{id}/entreeSorties/{fk}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"fk"}}`, encodeURIComponent(String(requestParameters.fk))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntreeSortieToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntreeSortieFromJSON(jsonValue));
    }

    /**
     * Mettez à jour un élément lié par id pour entreeSorties.
     */
    async produitPrototypeUpdateByIdEntreeSorties(requestParameters: ProduitPrototypeUpdateByIdEntreeSortiesRequest): Promise<EntreeSortie> {
        const response = await this.produitPrototypeUpdateByIdEntreeSortiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     */
    async produitReplaceByIdPostProduitsidReplaceRaw(requestParameters: ProduitReplaceByIdPostProduitsidReplaceRequest): Promise<runtime.ApiResponse<Produit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitReplaceByIdPostProduitsidReplace.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/{id}/replace`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     */
    async produitReplaceByIdPostProduitsidReplace(requestParameters: ProduitReplaceByIdPostProduitsidReplaceRequest): Promise<Produit> {
        const response = await this.produitReplaceByIdPostProduitsidReplaceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     */
    async produitReplaceByIdPutProduitsidRaw(requestParameters: ProduitReplaceByIdPutProduitsidRequest): Promise<runtime.ApiResponse<Produit>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling produitReplaceByIdPutProduitsid.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     */
    async produitReplaceByIdPutProduitsid(requestParameters: ProduitReplaceByIdPutProduitsidRequest): Promise<Produit> {
        const response = await this.produitReplaceByIdPutProduitsidRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     */
    async produitReplaceOrCreatePostProduitsReplaceOrCreateRaw(requestParameters: ProduitReplaceOrCreatePostProduitsReplaceOrCreateRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/replaceOrCreate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     */
    async produitReplaceOrCreatePostProduitsReplaceOrCreate(requestParameters: ProduitReplaceOrCreatePostProduitsReplaceOrCreateRequest): Promise<Produit> {
        const response = await this.produitReplaceOrCreatePostProduitsReplaceOrCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     */
    async produitReplaceOrCreatePutProduitsRaw(requestParameters: ProduitReplaceOrCreatePutProduitsRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     */
    async produitReplaceOrCreatePutProduits(requestParameters: ProduitReplaceOrCreatePutProduitsRequest): Promise<Produit> {
        const response = await this.produitReplaceOrCreatePutProduitsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update instances of the model matched by {{where}} from the data source.
     */
    async produitUpdateAllRaw(requestParameters: ProduitUpdateAllRequest): Promise<runtime.ApiResponse<InlineResponse2002>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2002FromJSON(jsonValue));
    }

    /**
     * Update instances of the model matched by {{where}} from the data source.
     */
    async produitUpdateAll(requestParameters: ProduitUpdateAllRequest): Promise<InlineResponse2002> {
        const response = await this.produitUpdateAllRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     */
    async produitUpsertWithWhereRaw(requestParameters: ProduitUpsertWithWhereRequest): Promise<runtime.ApiResponse<Produit>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.where !== undefined) {
            queryParameters['where'] = requestParameters.where;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Produits/upsertWithWhere`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProduitToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProduitFromJSON(jsonValue));
    }

    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     */
    async produitUpsertWithWhere(requestParameters: ProduitUpsertWithWhereRequest): Promise<Produit> {
        const response = await this.produitUpsertWithWhereRaw(requestParameters);
        return await response.value();
    }

}
