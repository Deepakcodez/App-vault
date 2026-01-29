import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'


export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})

export const jetbrainsMono = localFont({
    src: '../../public/fonts/jetbrains.woff2',
    variable: "--font-jetbrainsmono",
})
