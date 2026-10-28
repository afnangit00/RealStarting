import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
export const metadata: Metadata={title:"Afnan Cheranthodika — Creative Web Developer",description:"Premium, responsive websites and digital experiences by Afnan Cheranthodika.",keywords:["Afnan Cheranthodika","Next.js developer","creative web developer","portfolio websites"],openGraph:{title:"Afnan Cheranthodika — Creative Web Developer",description:"Digital experiences with clarity, character and purpose.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="scroll-smooth"><body className={`${inter.variable} ${space.variable}`}>{children}</body></html>}