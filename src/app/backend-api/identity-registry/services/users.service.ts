import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../../authentication/services/auth.service";
import {PemCertificate} from "../autogen/model/PemCertificate";
import {User} from "../autogen/model/User";
import {UsercontrollerApi} from "../autogen/api/UsercontrollerApi";

@Injectable()
export class UsersService implements OnInit {
  constructor(private userApi: UsercontrollerApi, private authService: AuthService) {
  }

  ngOnInit() {

  }

	public getUser(userMrn:string): Observable<User> {
		let orgMrn = this.authService.authState.orgMrn;
		return this.userApi.getUserUsingGET(orgMrn, userMrn);
	}

	public getUsers(): Observable<Array<User>> {
		let orgMrn = this.authService.authState.orgMrn;
		return this.userApi.getOrganizationUsersUsingGET(orgMrn);
	}

	public createUser(orgMrn: string, user: User) : Observable<User> {
		return this.userApi.createUserUsingPOST(orgMrn, user);
	}

  public issueNewCertificate(userMrn:string) : Observable<PemCertificate> {
	  let orgMrn = this.authService.authState.orgMrn;
    return this.userApi.newUserCertUsingGET(orgMrn, userMrn);
  }
}
