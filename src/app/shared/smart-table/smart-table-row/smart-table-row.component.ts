import { Component, Input, OnInit } from "@angular/core";
import SmartTableRow from "../models/smart-table-row";

@Component({
  selector: "app-smart-table-row",
  templateUrl: "./smart-table-row.component.html",
  styleUrls: ["./smart-table-row.component.scss"],
})
export class SmartTableRowComponent implements OnInit {
  @Input() public smartTableRow: SmartTableRow;

  constructor() {}

  ngOnInit() {}
}
