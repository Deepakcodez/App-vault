
"use client"
import ReactLenis from 'lenis/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function LenisProvider({ children }: Props) {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}