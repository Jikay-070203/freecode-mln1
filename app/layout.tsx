import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ý Thức & Con Đường Cuộc Đời - Game Mô Phỏng Cuộc Sống",
  description:
    "Trải nghiệm game mô phỏng cuộc sống từ 25 đến 41 tuổi. Khám phá mối quan hệ giữa tồn tại xã hội và ý thức xã hội qua các quyết định quan trọng trong đời.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
