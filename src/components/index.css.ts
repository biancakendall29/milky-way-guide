import { style } from "@vanilla-extract/css";
import { mwTheme } from "../styles/theme.css";

export const main = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  margin: "0 auto",
  padding: mwTheme.spacing.small,
  position: "relative",
  height: "100%",
  backgroundColor: mwTheme.colors.black,
  // backgroundImage: 'url("/img/starry-bg.jpg")',
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  overflow: "clip",
});
