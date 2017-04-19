/**
 * Maritime Cloud Endorsement API
 * Maritime Cloud Endorsement API can be used for endorsing services in the Maritime Cloud.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: info@maritimecloud.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class EndorsecontrollerApi {
    protected basePath = 'https://test-endorse.maritimecloud.net/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * createEndorment
     * 
     * @param input input
     */
    public createEndormentUsingPOST(input: models.Endorsement, extraHttpRequestParams?: any): Observable<models.Endorsement> {
        return this.createEndormentUsingPOSTWithHttpInfo(input, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteEndorment
     * 
     * @param serviceMrn serviceMrn
     * @param orgMrn orgMrn
     */
    public deleteEndormentUsingDELETE(serviceMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<any> {
        return this.deleteEndormentUsingDELETEWithHttpInfo(serviceMrn, orgMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getEndormentsByOrgMrn
     * 
     * @param serviceLevel serviceLevel
     * @param orgMrn orgMrn
     */
    public getEndormentsByOrgMrnUsingGET(serviceLevel: string, orgMrn: string, extraHttpRequestParams?: any): Observable<models.PageEndorsement> {
        return this.getEndormentsByOrgMrnUsingGETWithHttpInfo(serviceLevel, orgMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getEndormentsByServiceMrn
     * 
     * @param serviceMrn serviceMrn
     */
    public getEndormentsByServiceMrnUsingGET(serviceMrn: string, extraHttpRequestParams?: any): Observable<models.PageEndorsement> {
        return this.getEndormentsByServiceMrnUsingGETWithHttpInfo(serviceMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getEndorsedByParentMrnAndOrgMrn
     * 
     * @param parentMrn parentMrn
     * @param orgMrn orgMrn
     */
    public getEndorsedByParentMrnAndOrgMrnUsingGET(parentMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<models.PageEndorsement> {
        return this.getEndorsedByParentMrnAndOrgMrnUsingGETWithHttpInfo(parentMrn, orgMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getEndorsedByParentMrn
     * 
     * @param parentMrn parentMrn
     */
    public getEndorsedByParentMrnUsingGET(parentMrn: string, extraHttpRequestParams?: any): Observable<models.PageEndorsement> {
        return this.getEndorsedByParentMrnUsingGETWithHttpInfo(parentMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getEndorsment
     * 
     * @param serviceMrn serviceMrn
     * @param orgMrn orgMrn
     */
    public getEndorsmentUsingGET(serviceMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<any> {
        return this.getEndorsmentUsingGETWithHttpInfo(serviceMrn, orgMrn, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * createEndorment
     * 
     * @param input input
     */
    public createEndormentUsingPOSTWithHttpInfo(input: models.Endorsement, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsements`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createEndormentUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: input == null ? '' : JSON.stringify(input), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * deleteEndorment
     * 
     * @param serviceMrn serviceMrn
     * @param orgMrn orgMrn
     */
    public deleteEndormentUsingDELETEWithHttpInfo(serviceMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsements/${serviceMrn}/${orgMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceMrn' is not null or undefined
        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling deleteEndormentUsingDELETE.');
        }
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteEndormentUsingDELETE.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getEndormentsByOrgMrn
     * 
     * @param serviceLevel serviceLevel
     * @param orgMrn orgMrn
     */
    public getEndormentsByOrgMrnUsingGETWithHttpInfo(serviceLevel: string, orgMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsements-by/${serviceLevel}/${orgMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceLevel' is not null or undefined
        if (serviceLevel === null || serviceLevel === undefined) {
            throw new Error('Required parameter serviceLevel was null or undefined when calling getEndormentsByOrgMrnUsingGET.');
        }
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getEndormentsByOrgMrnUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getEndormentsByServiceMrn
     * 
     * @param serviceMrn serviceMrn
     */
    public getEndormentsByServiceMrnUsingGETWithHttpInfo(serviceMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsements/${serviceMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceMrn' is not null or undefined
        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getEndormentsByServiceMrnUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getEndorsedByParentMrnAndOrgMrn
     * 
     * @param parentMrn parentMrn
     * @param orgMrn orgMrn
     */
    public getEndorsedByParentMrnAndOrgMrnUsingGETWithHttpInfo(parentMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsed-children/${parentMrn}/${orgMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'parentMrn' is not null or undefined
        if (parentMrn === null || parentMrn === undefined) {
            throw new Error('Required parameter parentMrn was null or undefined when calling getEndorsedByParentMrnAndOrgMrnUsingGET.');
        }
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getEndorsedByParentMrnAndOrgMrnUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getEndorsedByParentMrn
     * 
     * @param parentMrn parentMrn
     */
    public getEndorsedByParentMrnUsingGETWithHttpInfo(parentMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsed-children/${parentMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'parentMrn' is not null or undefined
        if (parentMrn === null || parentMrn === undefined) {
            throw new Error('Required parameter parentMrn was null or undefined when calling getEndorsedByParentMrnUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getEndorsment
     * 
     * @param serviceMrn serviceMrn
     * @param orgMrn orgMrn
     */
    public getEndorsmentUsingGETWithHttpInfo(serviceMrn: string, orgMrn: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/oidc/endorsement-by/${serviceMrn}/${orgMrn}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'serviceMrn' is not null or undefined
        if (serviceMrn === null || serviceMrn === undefined) {
            throw new Error('Required parameter serviceMrn was null or undefined when calling getEndorsmentUsingGET.');
        }
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getEndorsmentUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json;charset=UTF-8'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}