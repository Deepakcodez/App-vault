"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Activity, Suspense, useRef, useState } from 'react';
import { Button } from "../ui/button";
import GithubButton from "@/features/auth/components/GithubButton";
import { cn } from "@/lib/utils";

export default function Navbar() {

    const navbarRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);


    const tl = useRef<gsap.core.Timeline | null>(null);
    const iconTl = useRef<gsap.core.Timeline | null>(null);

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
            })
            .from(menuRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: "power3.out",
            });



        iconTl.current = gsap.timeline({ paused: true })
            .to(".menu1line", {
                duration: 0.3,
                rotate: 45,
                y: 4,
                width: "20px",
                ease: "power3.out",
            })
            .to(".menu2line", {
                duration: 0.3,
                rotate: -45,
                y: -4,
                width: "20px",
                ease: "power3.out",
            }, 0);

    }, { scope: navbarRef });

    const toggle = () => {
        setIsOpen(prev => !prev);

        if (!tl.current || !iconTl.current) return;

        if (isOpen) {
            tl.current.reverse();
            iconTl.current.reverse();
        } else {
            tl.current.play();
            iconTl.current.play();
        }
    };



    return (
        <div className='fixed top-0 w-full pt-6 flex justify-center '>

            <div
                ref={navbarRef}
                className={`navbar w-220 mx-auto cursor-pointer bg-neutral-800  rounded-lg `}>
                <div className={cn('  w-full flex justify-between items-center p-3 ',
                    isOpen && 'border-b border-b-neutral-700/50'
                )}>

                    <div className='flex flex-1 gap-1 items-center  '>
                        <button onClick={toggle} className='flex gap-1 items-center px-3 py-2 rounded-md w-fit hover:bg-neutral-300/10 duration-700 '>
                            <div className='flex flex-col gap-[2px]'>
                                <div className='menu1line h-[2px] w-12 bg-white rounded-full' />
                                <div className='menu2line h-[2px] w-8 bg-white rounded-full' />
                            </div>

                            <p className='text-white text-xl hidden md:block'>Menu</p>
                        </button>
                    </div>
                    <div className='flex-1 flex justify-center '>
                        <h2 className='text-white text-xl font-black'>APPVAULT</h2>
                    </div>


                    <div className='flex-1 flex justify-end'>
                        <Suspense fallback={<Button>
                            Continue with GitHub
                        </Button>}>
                            <GithubButton />
                        </Suspense>
                    </div>
                </div>





                {/* <div ref={menuRef} className=" p-3 menu-content ">
                    <div className="w-5/12 h-full bg-white/10 rounded-2xl p-4">
                        <h2 className="text-white text-xs uppercase ">Our Products</h2>

                        <div className="flex flex-col gap-5 mt-12">
                            <div className=" h-12 flex items-center border-b border-b-white/10">
                                <p className="text-white text-2xl font-semibold uppercase ">AppVault</p>
                            </div>
                            <div className=" h-12 flex items-center border-b border-b-white/10">
                                <p className="text-white text-2xl font-semibold uppercase ">App Avatar</p>
                            </div>
                            <div className=" h-12 flex items-center ">
                                <p className="text-white text-2xl font-semibold uppercase ">App Slides</p>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>

        </div >
    )
}