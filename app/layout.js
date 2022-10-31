import '../styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter();

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}