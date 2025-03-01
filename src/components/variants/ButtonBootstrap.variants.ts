import { customElement } from "lit/decorators.js";
import { UIButton } from "../atoms";

@customElement("ui-button-bootstrap")
export class UIButtonBootstrap extends UIButton {
  constructor() {
    super();
    this.variant = "bootstrap";
  }
}
