import { CSSLibraryRepository } from "./CSSLibraryRepository";

export class TailwindCSSRepository implements CSSLibraryRepository {
  loadStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    document.head.appendChild(link);
  }
}
