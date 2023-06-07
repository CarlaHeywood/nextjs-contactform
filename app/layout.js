import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Contact Form',
//   description: 'Vercel Serverless COntact form with email confirmations',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} p-10">{children}</body>
    </html>
  )
}
