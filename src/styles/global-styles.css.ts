import { globalStyle } from "@vanilla-extract/css";
import { mwTheme } from "./theme.css";

globalStyle("html", {
  boxSizing: "border-box",
});

globalStyle("html, body, #root", {
  height: "100vh",
  margin: 0,
});

globalStyle("*, *:before, *:after", {
  boxSizing: "inherit",
  color: "inherit",
  fontFamily: "inherit",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  fontFamily: "AvenirSWNew, arial, helvetica, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
});

globalStyle("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "inherit",
});

globalStyle(":focus", {
  outline: "none",
});
