import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React.js 18, Next.js 14 - App',
  description: 'Created by Andrii Matenka',
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
);

export default RootLayout;