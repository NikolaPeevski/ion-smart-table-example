import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import SmartTableHeader from "./models/smart-table-header";
import SmartTableRow from "./models/smart-table-row";
import { SmartTableServiceService } from "./smart-table-service.service";

@Component({
  selector: "app-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTableComponent implements OnInit {
  @Input() public smartTableHeaderColl: Array<SmartTableHeader> = [];
  @Input() public smartTableRowColl: Array<SmartTableRow> = [];

  employees = [{ firstName: "Test", lastName: "Test", status: true }];

  constructor(
    public smartTableService: SmartTableServiceService,
    private sanitizer: DomSanitizer
  ) {}

  getVal(val) {
    console.log("bla");
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }

  ngOnInit() {}
}
