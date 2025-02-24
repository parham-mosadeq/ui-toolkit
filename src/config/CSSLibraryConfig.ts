import { CSSLibraryRepository } from "../repositories/CSSLibraryRepository";
import { TailwindCSSRepository } from "../repositories/TailwindCSSRepository";
import { BootstrapCSSRepository } from "../repositories/BootstrapCSSRepository";

export class CSSLibraryConfig {
  private static repository: CSSLibraryRepository | null = null;

  static setRepository(library: string) {
    if (library === "tailwind") {
      this.repository = new TailwindCSSRepository();
    } else if (library === "bootstrap") {
      this.repository = new BootstrapCSSRepository();
    } else {
      throw new Error(`Unsupported library: ${library}`);
    }
  }

  static loadLibrary() {
    if (this.repository) {
      this.repository.loadStyles();
    } else {
      throw new Error("CSS library repository not set");
    }
  }
}
