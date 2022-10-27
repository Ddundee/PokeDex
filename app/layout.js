export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <title>Next.JS</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}