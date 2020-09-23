import { IonIcon } from "@ionic/angular";

export default class SmartTableCell {
  public type;
  public value;
  public el;

  constructor(value: any, type: any, unpack) {
    if (unpack) {
      this.value = unpack(value);
    } else {
      this.value = value;
    }
    if (type == "icon") {
      this.value = `<ion-icon name="${value}"></ion-icon>`;
    }
    if (type == "status") {
      this.value = `<ion-icon name="ellipse" color="${
        value ? "success" : "danger"
      }"></ion-icon>`;
      console.log(this.value);
    }
    this.type = type;
  }
}
