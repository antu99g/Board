import { Montserrat, Lato, Open_Sans } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const open_Sans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});
