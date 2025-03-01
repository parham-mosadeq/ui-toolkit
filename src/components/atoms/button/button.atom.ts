import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ui-button")
export class UIButton extends LitElement {
  @property({ type: String }) variant: "bootstrap" | "tailwind" = "bootstrap";

  static styles = css`
    button {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 16px;
    }
    .bootstrap {
      background-color: blue;
      color: white;
      border: none;
    }
    .tailwind {
      background-color: black;
      color: white;
      border: none;
    }
  `;

  render() {
    return html`
      <button class="${this.variant}">
        <slot></slot>
      </button>
    `;
  }
}
