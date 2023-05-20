import { Command } from "./commanders/interfaces";

export class SimpleRemoteControle {
  slot!: Command;

  setCommand(command: Command): void {
    this.slot = command;
  }

  pressButton(): void {
    this.slot.execute();
  }
}
