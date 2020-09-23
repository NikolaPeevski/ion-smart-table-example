import SmartTableCell from "./smart-table-cell";

export default class SmartTableRow {
  public smartTableCellColl: Array<SmartTableCell> = [];

  constructor(input) {
    console.log(input);
    this.smartTableCellColl = input.map(
      (el) => new SmartTableCell(el.value, el.type, el.unpack)
    );
  }
}
