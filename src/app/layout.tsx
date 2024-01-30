import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { ReduxProvider } from "@/store";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const viewport: Viewport = {
  themeColor: "dark",
  width: 1,
  initialScale: 1,
  maximumScale: 1,
};
export const metadata: Metadata = {
  title: "Sales Wave",
  description: "Your one-stop e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} font-poppins bg-neutral-60`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
