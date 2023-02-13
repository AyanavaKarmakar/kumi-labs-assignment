import localfont from "@next/font/local";
import { Mulish } from "@next/font/google";

export const mortiseFont = localfont({
  src: "./Mortise-Bold.woff2",
  variable: "--font-mortiseFont",
  display: "swap",
  preload: true,
});

export const mulishFont = Mulish({
  variable: "--font-mullishFont",
  display: "swap",
  preload: true,
  subsets: ["latin-ext"],
});
