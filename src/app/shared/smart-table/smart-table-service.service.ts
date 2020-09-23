import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SmartTableServiceService {
  constructor() {}

  createRange(numb) {
    const items: number[] = [];
    for (let i = 1; i <= numb; i++) {
      items.push(i);
    }
    return items;
  }

  randomWith(min, max) {
    return { width: Math.floor(Math.random() * (max - min + 1) + min) + "%" };
  }
}
