import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {OrganizationsService} from "../../../../../backend-api/identity-registry/services/organizations.service";
import {MCNotificationsService, MCNotificationType} from "../../../../../shared/mc-notifications.service";
import {Organization} from "../../../../../backend-api/identity-registry/autogen/model/Organization";
import {Router, ActivatedRoute} from "@angular/router";
import {Instance} from "../../../../../backend-api/service-registry/autogen/model/Instance";
import {InstancesService} from "../../../../../backend-api/service-registry/services/instances.service";

@Component({
  selector: 'instance-list',
  encapsulation: ViewEncapsulation.None,
  template: require('./instance-list.html'),
  styles: []
})
export class InstanceListComponent implements OnInit {
  public organization: Organization;
  public instances: Array<Instance>;
  public isLoading: boolean;
  public onGotoInstance: Function;
  constructor(private route: ActivatedRoute, private router: Router, private notifications: MCNotificationsService, private orgService: OrganizationsService, private instancesService: InstancesService) {
    this.organization = {};
  }

  ngOnInit() {
    this.onGotoInstance = this.gotoInstance.bind(this);

    this.isLoading = true;
    this.loadMyOrganization();
    this.loadInstances();
  }

  private loadInstances() {
    this.instancesService.getInstancesForMyOrg().subscribe(
      instances => {
        this.instances = instances;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
        this.notifications.generateNotification({title:'Error', message:'Error when trying to get instances', type:MCNotificationType.Error});
      }
    );
  }

  private loadMyOrganization() {
    this.orgService.getMyOrganization().subscribe(
      organization => {
        this.organization = organization;
      },
      err => {
        this.notifications.generateNotification({title:'Error', message:'Error when trying to get organization', type:MCNotificationType.Error});
      }
    );
  }

  private gotoInstance(index:number) {
    this.router.navigate([this.instances[index].instanceId], {relativeTo: this.route })
  }

}