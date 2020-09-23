import { Component, Input, OnInit } from "@angular/core";
import SmartTableCell from "../models/smart-table-cell";

@Component({
  selector: "app-smart-table-cell",
  templateUrl: "./smart-table-cell.component.html",
  styleUrls: ["./smart-table-cell.component.scss"],
})
export class SmartTableCellComponent implements OnInit {
  @Input() public smartTableCell: SmartTableCell;

  constructor() {}

  ngOnInit() {}
}
