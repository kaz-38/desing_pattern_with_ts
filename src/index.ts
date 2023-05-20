import "./styles.css";
import { result } from "./designPatterns/decorator/index";

document.getElementById("app")!.innerHTML = `
<h1>Design Pattern Samples</h1>
<div>
  See the console for sample.
  <br />
  result => ${result}
</div>`;
