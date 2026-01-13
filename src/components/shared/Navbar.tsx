import { Github, } from 'lucide-react'
import { Button } from '../pages/ui/button'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef, useState } from 'react';
import { cn } from '@/services/utils';

export default function Navbar() {

    const navbarRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const tl = useRef<gsap.core.Timeline | null>(null);

    // Create GSAP timeline ONCE
    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true })
            .to(navbarRef.current, {
                width: "90%",
                duration: .4,
                ease: "power4.out",
            })
            .to(navbarRef.current, {
                height: 620,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            });
    });

    const toggle = () => {
        setIsOpen(prev => !prev);

        if (!tl.current) return;

        // Reverse or Play the animation
        isOpen ? tl.current.reverse() : tl.current.play();
    };
    return (
        <div className='fixed top-0 w-full pt-6 flex justify-center '>

            <div
                ref={navbarRef}
                className={`navbar w-220 mx-auto cursor-pointer bg-neutral-800  rounded-lg `}>
                <div className={cn('  w-full flex justify-between items-center ',
                    'p-4',
                    isOpen && 'border-b border-b-neutral-700/50'
                )}>

                    <div
                        onClick={toggle}
                        className='flex flex-1 items-center '>
                        <svg
                            className='w-15 h-12'
                            width="400" height="117" viewBox="0 0 900 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="600" height="30" rx="25" fill="white" />
                            <rect y="67" width="417" height="30" rx="25" fill="white" />
                        </svg>

                        <button className='text-white text-xl hidden md:block'>Menu</button>
                    </div>
                    <div className='flex-1 flex justify-center '>
                        <h2 className='text-white text-xl font-black'>APPVAULT</h2>
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <Button className='bg-green-500'>
                            Continue with <Github />
                        </Button>
                    </div>
                </div>
            </div>

        </div >
    )
}