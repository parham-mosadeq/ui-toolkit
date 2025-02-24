import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-family: Arial, sans-serif;
    }
  `;

  @property({ type: String }) name = "Lit";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
