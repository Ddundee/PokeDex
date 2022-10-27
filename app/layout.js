import '../styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter();

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <title>PokeDex: Pokemon Name</title>
            </head>
            <body className={inter.className}>
                <div></div>
                <div className=''>
                    <button className='w-56 h-10 bg-[#4FAAFF] rounded-lg text-white hover:border-2 border-[#1c94eb] font-[400] text-lg'>Suprise Me!</button>
                </div>
                {children}
            </body>
        </html>
    )
}