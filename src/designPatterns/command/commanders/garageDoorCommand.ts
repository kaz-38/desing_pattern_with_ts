import { Command } from "./interfaces";
import { GarageDoor } from "../modules";

export class GarageDoorOpenCommand implements Command {
  garage!: GarageDoor;

  constructor(garage: GarageDoor) {
    this.garage = garage;
  }

  execute(): void {
    this.garage.open();
  }
}
