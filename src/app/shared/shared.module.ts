import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { SmartTableRowComponent } from "./smart-table/smart-table-row/smart-table-row.component";
import { SmartTableCellComponent } from "./smart-table/smart-table-cell/smart-table-cell.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [
    SmartTableComponent,
    SmartTableRowComponent,
    SmartTableCellComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [SmartTableComponent],
})
export class SharedModule {}
