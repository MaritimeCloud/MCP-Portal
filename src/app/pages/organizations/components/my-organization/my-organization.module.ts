import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import {routing} from "./my-organization.routing";
import {NgaModule} from "../../../../theme/nga.module";
import {SharedModule} from "../../../shared/shared.module";
import {MyOrganization} from "./my-organization.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    MyOrganization
  ]
})
export default class MyOrganizationModule {}