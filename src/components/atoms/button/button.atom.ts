import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
// Import Tailwind and Bootstrap
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

@customElement("button-atom")
export class ButtonAtom extends LitElement {
  @property({ type: String }) label = "Click";
  @property({ type: String }) color: "blue" | "red" | "green" = "blue"; // color variants (tailwind or bootstrap)
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) size: "small" | "medium" | "large" = "medium"; // small, medium, large
  @property({ type: String }) library: "tailwind" | "bootstrap" = "tailwind"; // 'tailwind' or 'bootstrap'

  // Disable Shadow DOM, using light DOM instead
  createRenderRoot() {
    return this;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      display: inline-block;
    }
    button::part(button) {
      display: inline-block;
    }
  `;

  private tailwindClasses() {
    const sizeClasses = {
      small: "px-3 py-1 text-sm",
      medium: "px-5 py-2 text-base",
      large: "px-6 py-3 text-lg",
    };

    const colorClasses = {
      blue: "bg-blue-500 text-white",
      red: "bg-red-500 text-white",
      green: "bg-green-500 text-white",
    };

    return `${sizeClasses[this.size]} ${colorClasses[this.color]} rounded-md  ${
      this.disabled ? "opacity-50 cursor-not-allowed" : ""
    }`;
  }

  private bootstrapClasses() {
    const sizeClasses = {
      small: "btn-sm",
      medium: "",
      large: "btn-lg",
    };

    const colorClasses = {
      blue: "btn-primary",
      red: "btn-danger",
      green: "btn-success",
    };

    return `btn ${sizeClasses[this.size]} ${colorClasses[this.color]} ${
      this.disabled ? "disabled" : ""
    }`;
  }

  render() {
    const classes =
      this.library === "tailwind"
        ? this.tailwindClasses()
        : this.bootstrapClasses();

    return html`
      <button
        class="${classes}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}">
        ${this.label}
      </button>
    `;
  }

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent("button-atom", {
        detail: { label: this.label },
        bubbles: true,
        composed: true,
      })
    );
  }
}
