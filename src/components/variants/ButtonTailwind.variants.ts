import { customElement } from "lit/decorators.js";
import { UIButton } from "../atoms";

@customElement("ui-button-tailwind")
export class UIButtonTailwind extends UIButton {
  constructor() {
    super();
    this.variant = "tailwind";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-button-tailwind": UIButtonTailwind;
  }
}
