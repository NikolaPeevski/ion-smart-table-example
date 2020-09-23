import { Component, OnInit } from "@angular/core";
import SmartTableHeader from "../shared/smart-table/models/smart-table-header";
import SmartTableRow from "../shared/smart-table/models/smart-table-row";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  smartTableHeaderColl: Array<SmartTableHeader>;
  smartTableRowColl: Array<SmartTableRow>;

  data = [
    {
      firstName: "Nik",
      lastName: "Peevski",
      status: true,
      startDate: new Date().setFullYear(2020, 6, 15),
      endDate: new Date().setFullYear(2021, 6, 15),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.smartTableHeaderColl = [
      new SmartTableHeader("Name"),
      new SmartTableHeader("Vorname"),
      new SmartTableHeader("Status"),
      new SmartTableHeader("Date"),
    ];

    const normalisedDate = ({ startDate, endDate }) =>
      `${new Date(startDate)}${
        endDate != null ? " - " + new Date(endDate) : ""
      }`;
    this.smartTableRowColl = this.data.map(
      (el) =>
        new SmartTableRow([
          { value: el.firstName },
          { value: el.lastName },
          { value: el.status, type: "status" },
          {
            value: { startDate: el.startDate, endDate: el.endDate },
            type: "",
            unpack: normalisedDate,
          },
        ])
    );
  }
}
