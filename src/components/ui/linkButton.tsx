import Link from 'next/link'
import React from 'react'
import { Button } from './button';

type Props = {
    href: string;
    children: React.ReactNode;
}

export default function LinkButton({ href, children }: Props) {
    return (
        <Link href={href}>
            <Button>
                {children}
            </Button>
        </Link>
    )
}