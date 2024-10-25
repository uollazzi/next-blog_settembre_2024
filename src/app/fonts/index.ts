import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
export const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});