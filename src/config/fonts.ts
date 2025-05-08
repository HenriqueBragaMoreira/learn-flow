import { DM_Sans } from "next/font/google";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fonts = {
  sans,
};
