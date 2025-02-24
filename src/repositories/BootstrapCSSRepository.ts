import { CSSLibraryRepository } from "./CSSLibraryRepository";

export class BootstrapCSSRepository implements CSSLibraryRepository {
  loadStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
    document.head.appendChild(link);
  }
}
