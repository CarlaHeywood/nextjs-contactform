import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Contact Form | Carla Heywood</title>
      <meta
        name="description"
        content="Vercel Serverless Contact form with email confirmations"
      />
      <body className="{inter.className} p-10">{children}</body>
    </html>
  );
}
