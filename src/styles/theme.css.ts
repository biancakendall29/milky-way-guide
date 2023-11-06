import { createGlobalTheme } from "@vanilla-extract/css";
import { APP_CONTAINER_ID } from "../constants";

export const mwTheme = createGlobalTheme(`#${APP_CONTAINER_ID}`, {
  colors: {
    backgroundBlue: "rgb(30, 43, 88)",
    black: "rgb(0, 0, 0)",
    gray0: "rgb(240, 240, 240)",
    gray1: "rgb(187, 187, 187)",
    gray2: "rgb(136, 136, 136)",
    gray4: "rgb(46, 46, 46)",
    text: "rgb(0, 0, 0)",
    white: "white",
  },
  spacing: {
    large: "60px",
    medium: "40px",
    small: "20px",
    xSmall: "10px",
  },
});
