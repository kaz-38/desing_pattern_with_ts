import { Light, GarageDoor } from "./modules";
import { LigthUpCommand } from "./commanders/lightCommand";
import { GarageDoorOpenCommand } from "./commanders/garageDoorCommand";
import { SimpleRemoteControle } from "./simpleRemoteControle";

export const sampleCommand = (): void => {
  console.log("start command pattern");

  const simpleRemoteControle = new SimpleRemoteControle();

  // light On
  const ligthUpCommand = new LigthUpCommand(new Light());
  simpleRemoteControle.setCommand(ligthUpCommand);
  simpleRemoteControle.pressButton();

  // Garage Open
  const garageDoorOpenCommand = new GarageDoorOpenCommand(new GarageDoor());
  simpleRemoteControle.setCommand(garageDoorOpenCommand);
  simpleRemoteControle.pressButton();
};
