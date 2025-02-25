import { createComponent } from "@lit/react";
import React from "react";
import { ButtonAtom } from "../components";

export const UIButton = createComponent({
  tagName: "button-atom",
  elementClass: ButtonAtom,
  react: React,
});
