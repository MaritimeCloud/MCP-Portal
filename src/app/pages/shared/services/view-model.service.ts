import {Injectable, OnInit} from '@angular/core';
import {Specification} from "../../../backend-api/service-registry/autogen/model/Specification";
import {LabelValueModel} from "../../../theme/components/mcLabelValueTable/mcLabelValueTable.component";
import {Design} from "../../../backend-api/service-registry/autogen/model/Design";
import {Instance} from "../../../backend-api/service-registry/autogen/model/Instance";

@Injectable()
export class ViewModelService implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

  public generateLabelValuesForSpecification(specification:Specification):Array<LabelValueModel> {
    var labelValues:Array<LabelValueModel> = undefined;
    if (specification) {
      labelValues = [];
      labelValues.push({label: 'ID', valueHtml: specification.specificationId});
      labelValues.push({label: 'Name', valueHtml: specification.name});
      labelValues.push({label: 'Version', valueHtml: specification.version});
      labelValues.push({label: 'Status', valueHtml: specification.status});
      labelValues.push({label: 'Description', valueHtml: specification.description});
    }
    return labelValues
  }

  public generateLabelValuesForDesign(design:Design):Array<LabelValueModel> {
    var labelValues:Array<LabelValueModel> = undefined;
    if (design) {
      labelValues = [];
      labelValues.push({label: 'ID', valueHtml: design.designId});
      labelValues.push({label: 'Name', valueHtml: design.name});
      labelValues.push({label: 'Version', valueHtml: design.version});
      labelValues.push({label: 'Status', valueHtml: design.status});
      labelValues.push({label: 'Description', valueHtml: design.description});
    }
    return labelValues;
  }

  public generateLabelValuesForInstance(instance:Instance):Array<LabelValueModel> {
    var labelValues:Array<LabelValueModel> = undefined;
    if (instance) {
      labelValues = [];
      labelValues.push({label: 'ID', valueHtml: instance.instanceId});
      labelValues.push({label: 'Name', valueHtml: instance.name});
      labelValues.push({label: 'Version', valueHtml: instance.version});
      labelValues.push({label: 'Status', valueHtml: instance.status});
      labelValues.push({label: 'Description', valueHtml: instance.description});
    }
    return labelValues;
  }
}