import Navbar from '@/components/layout/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function UserRootLayout({ children }: Props) {
    return (
        <div>
            <Navbar />
            {children}</div>
    )
}