import './styles/globals.css'
import Link from "next/link"
import Image from "next/image"
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
      <body className="{inter.className} bg-purple-100">
        <header className="bg-white">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5" passHref>
                <h1 className="font-bold text-2xl text-purple-700">
                  ContactForm.nextjs
                </h1>
              </Link>
            </div>
            <div className="justify-end">
              <Link
                href="https://github.com/CarlaHeywood"
                target="_blank"
                passHref
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/22629607?v=4"
                  className="rounded-full"
                  height={32}
                  width={32}
                  alt="Carla Heywood"
                />
              </Link>
            </div>
          </nav>
        </header>
        <div className="p-10">{children}</div>
      </body>
    </html>
  );
}
