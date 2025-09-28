import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400","500","600","700","800"],
  variable: "--font-be-vietnam",
})

export const metadata: Metadata = {
  title: "Triết học Mác-Lênin: Ý thức xã hội và vấn đề kết hôn",
  description: "Triết học Mác-Lênin: Ý thức xã hội và vấn đề kết hôn của thế hệ trẻ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}