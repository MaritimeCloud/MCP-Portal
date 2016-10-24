import {Component, ViewEncapsulation, Input, OnChanges} from '@angular/core';
import {TableHeader, TableRow, TableCell} from "../../../../theme/components/mcTable/mcTable.component";
import {Instance} from "../../../../backend-api/service-registry/autogen/model/Instance";

@Component({
  selector: 'instances-table',
  encapsulation: ViewEncapsulation.None,
  template: require('./instances-table.html'),
  styles: []
})
export class InstancesTableComponent implements OnChanges {
  @Input() instances: Array<Instance>;
  @Input() isLoading: boolean;
  @Input() onRowClick: (index:number) => void;
  public tableHeaders: Array<TableHeader>;
  public tableRows: Array<TableRow>;
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.instances) {
      this.generateHeadersAndRows();
    }
  }
  private generateHeadersAndRows() {
    var tableHeaders: Array<TableHeader> = [];
    var tableRows: Array<TableRow> = [];

    var tableHeader: TableHeader = {title:'Name', class:''};
    tableHeaders.push(tableHeader);

    tableHeader = {title:'Version', class:'nowrap align-center'};
    tableHeaders.push(tableHeader);

    tableHeader = {title:'Status', class:'nowrap'};
    tableHeaders.push(tableHeader);

    tableHeader = {title:'Description', class:''};
    tableHeaders.push(tableHeader);

    for (let instance of this.instances) {
      var cells:Array<TableCell> = [];

      var tableCell: TableCell = {valueHtml:instance.name, class:'', truncateNumber:50};
      cells.push(tableCell);

      tableCell = {valueHtml:instance.version, class:'nowrap align-center', truncateNumber:0};
      cells.push(tableCell);

      tableCell = {valueHtml:instance.status, class:'nowrap', truncateNumber:0};
      cells.push(tableCell);

      tableCell = {valueHtml:instance.description, class:'table-description', truncateNumber:250};
      cells.push(tableCell);

      let tableRow: TableRow = {cells: cells};
      tableRows.push(tableRow);
    }

    this.tableHeaders = tableHeaders;
    this.tableRows = tableRows;
  }
}