/**
 * Maritime Cloud Identity Registry API
 * Maritime Cloud Identity Registry API can be used for managing entities in the Maritime Cloud.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: info@maritimecloud.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class VesselcontrollerApi {
    protected basePath = 'https://api.maritimecloud.net';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createVessel
     * 
     * @param orgMrn orgMrn
     * @param input input
     */
    public createVesselUsingPOST (orgMrn: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createVesselUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createVesselUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * createVessel
     * 
     * @param orgMrn orgMrn
     * @param input input
     */
    public createVesselUsingPOST1 (orgMrn: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createVesselUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createVesselUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public deleteVesselUsingDELETE (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteVesselUsingDELETE.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVesselUsingDELETE.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public deleteVesselUsingDELETE1 (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteVesselUsingDELETE1.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVesselUsingDELETE1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganizationVessels
     * 
     * @param orgMrn orgMrn
     */
    public getOrganizationVesselsUsingGET (orgMrn: string, extraHttpRequestParams?: any ) : Observable<Array<models.Vessel>> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessels'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationVesselsUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getOrganizationVessels
     * 
     * @param orgMrn orgMrn
     */
    public getOrganizationVesselsUsingGET1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<Array<models.Vessel>> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessels'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationVesselsUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public getVesselUsingGET (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getVesselUsingGET.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public getVesselUsingGET1 (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getVesselUsingGET1.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * newVesselCert
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public newVesselCertUsingGET (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel/{vesselMrn}/certificate/issue-new'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newVesselCertUsingGET.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling newVesselCertUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * newVesselCert
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     */
    public newVesselCertUsingGET1 (orgMrn: string, vesselMrn: string, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel/{vesselMrn}/certificate/issue-new'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling newVesselCertUsingGET1.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling newVesselCertUsingGET1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * revokeVesselCert
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     * @param certId certId
     * @param input input
     */
    public revokeVesselCertUsingPOST (orgMrn: string, vesselMrn: string, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel/{vesselMrn}/certificate/{certId}/revoke'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * revokeVesselCert
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     * @param certId certId
     * @param input input
     */
    public revokeVesselCertUsingPOST1 (orgMrn: string, vesselMrn: string, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel/{vesselMrn}/certificate/{certId}/revoke'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     * @param input input
     */
    public updateVesselUsingPUT (orgMrn: string, vesselMrn: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateVesselUsingPUT.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling updateVesselUsingPUT.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateVesselUsingPUT.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateVessel
     * 
     * @param orgMrn orgMrn
     * @param vesselMrn vesselMrn
     * @param input input
     */
    public updateVesselUsingPUT1 (orgMrn: string, vesselMrn: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/vessel/{vesselMrn}'
            .replace('{' + 'orgMrn' + '}', String(orgMrn))
            .replace('{' + 'vesselMrn' + '}', String(vesselMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling updateVesselUsingPUT1.');
        }
        // verify required parameter 'vesselMrn' is not null or undefined
        if (vesselMrn === null || vesselMrn === undefined) {
            throw new Error('Required parameter vesselMrn was null or undefined when calling updateVesselUsingPUT1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateVesselUsingPUT1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
