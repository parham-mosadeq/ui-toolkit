// import { createComponent } from "@lit/react";
// import React from "react";
// import { UIButton } from "../components";

// export const ReactButton = createComponent({
//   tagName: "ui-button",
//   elementClass: UIButton as unknown as CustomElementConstructor,
//   react: React,
//   events: {
//     click: "click",
//   },
// });
import { createComponent } from "@lit/react";
import React from "react";
import { UIButton, UIButtonTailwind, UIButtonBootstrap } from "../components";

export const ReactButton = createComponent({
  tagName: "ui-button",
  elementClass: UIButton,
  react: React,
  events: {
    click: "click",
  },
  displayName: "ui-button",
});

export const ReactButtonTailwind = createComponent({
  tagName: "ui-button-tailwind",
  elementClass: UIButtonTailwind,
  react: React,
  events: {
    click: "click",
  },
  displayName: "ui-button-tailwind",
});

export const ReactButtonBootstrap = createComponent({
  tagName: "ui-button-bootstrap",
  elementClass: UIButtonBootstrap,
  react: React,
  events: {
    click: "click",
  },
  displayName: "ui-button-bootstrap",
});
