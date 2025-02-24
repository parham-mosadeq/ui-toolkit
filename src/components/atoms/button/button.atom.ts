import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("button-atom")
export class ButtonAtom extends LitElement {
  @property({ type: String }) label = "click";
  @property({ type: String }) color = "blue";
  @property({ type: Boolean }) disabled = false;
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    button.blue {
      background-color: blue;
      color: white;
    }
    button.red {
      background-color: red;
      color: white;
    }
    button.green {
      background-color: green;
      color: white;
    }
  `;

  // Render the button based on properties
  render() {
    return html`
      <button
        class="${this.color}"
        ?disabled="${this.disabled}"
        @click="${this._handleClick}">
        ${this.label}
      </button>
    `;
  }

  // Handle the button click event
  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("button-click", { detail: { label: this.label } })
    );
  }
}
