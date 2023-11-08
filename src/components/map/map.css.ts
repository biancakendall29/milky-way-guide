import { globalStyle, style } from "@vanilla-extract/css";
import { SIZE_FACTOR } from "./constants";
import { mwTheme } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  alignItems: "center",
  height: "100vh",
  margin: `0 2rem 0 ${0.12 * 0.5 * SIZE_FACTOR}px`,
});

export const planetContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 500ms",

  selectors: {
    "&:hover:not(:first-child)": {
      cursor: "pointer",
      transform: "scale(1.2)",
      transitionDuration: "1s",
    },
  },
});

export const planetImg = style({
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "50%",
  maxHeight: "100%",
});

export const magnifyer = style({
  position: "absolute",
  width: "100px",
  height: "100px",
});

export const magnifyerLabel = style({
  color: mwTheme.colors.white,
  fontSize: "12px",
});

export const magnifyerGlass = style({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  position: "absolute",
  top: "25px",
  left: "25px",
  margin: "auto",
  border: `${mwTheme.colors.white} solid 2px`,
});

export const magnifyerHandle = style({
  width: "40px",
  height: "3px",
  position: "absolute",
  top: "80px",
  left: "62px",
  backgroundColor: mwTheme.colors.white,
  transform: "rotate(45deg)",
  border: `${mwTheme.colors.white} solid 1px`,
});

globalStyle(`${container} > :first-child`, {
  objectFit: "contain",
  overflow: "hidden",
  position: "absolute",
  height: "auto",
  left: "-870px",
  transition: "transform 500ms",
});

globalStyle(`${container} > :first-child:hover`, {
  cursor: "pointer",
  transform: "scale(1.005)",
  transitionDuration: "1s",
});
