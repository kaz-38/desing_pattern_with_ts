export interface Ligth {
  on(): void;
  off(): void;
}

export class Light implements Ligth {
  on(): void {
    console.log("ligth up!!!");
  }
  off(): void {
    console.log("ligth down!!!");
  }
}

interface Garage {
  open(): void;
  close(): void;
}

export class GarageDoor implements Garage {
  open(): void {
    console.log("Door Open!");
  }
  close(): void {
    console.log("Door Close!");
  }
}
