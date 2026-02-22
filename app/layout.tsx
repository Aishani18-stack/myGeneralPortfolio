import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aishani Srivastava - Aerospace Engineering Student",
  description:
    "Portfolio of Aishani Srivastava, aerospace engineering student at LPU specializing in propulsion, space systems, and thermal engineering.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
