import { createComponent } from "@lit/react";
import React from "react";
import { UIButton } from "../components";

export const ReactButton = createComponent({
  tagName: "ui-button",
  elementClass: UIButton as unknown as CustomElementConstructor,
  react: React,
  events: {
    click: "click",
  },
});
