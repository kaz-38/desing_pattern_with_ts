import { Command } from "./interfaces";
import { Light } from "../modules";

export class LigthUpCommand implements Command {
  light!: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}
