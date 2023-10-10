import './globals.css'
import { Suspense } from "react";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ToastContainer } from '@/utils/toast'
import { StateProvider } from '@/contexts/StateContext'
import ThemeSuspense from '@/components/theme/ThemeSuspense'
import MuiTheme from './theme/MuiTheme';

const robotoFont = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopTECH',
  description: 'ShopTECH Next Version'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <ToastContainer />
        <StateProvider>
          <MuiTheme >
            <Suspense fallback={<ThemeSuspense />}>
              {children}
            </Suspense>
          </MuiTheme>
        </StateProvider>
      </body>
    </html>
  )
}
