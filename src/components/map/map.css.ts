import { globalStyle, style } from "@vanilla-extract/css";
import { SIZE_FACTOR } from "./constants";

export const container = style({
  display: "flex",
  alignItems: "center",
  height: "100vh",
  margin: `0 2rem 0 ${0.13 * 0.5 * SIZE_FACTOR}px`,
});
export const planetImg = style({
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "50%",
  maxHeight: "100%",
});

globalStyle(`${container} > :first-child`, {
  objectFit: "contain",
  overflow: "hidden",
  position: "absolute",
  height: "auto",
  left: "-80%",
  clipPath: "inset(0 0 0 75%)",
});
