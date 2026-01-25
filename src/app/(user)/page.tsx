import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="h-screen bg-neutral-900 flex flex-col justify-center items-center">
            <h2 className="text-center text-white font-black uppercase text-[clamp(1rem,10vw,4rem)] ">
                Your App <span className="text-primary">Portfolio.</span>
            </h2>
            <h2 className="text-center text-white font-black uppercase text-[clamp(1rem,10vw,4rem)]">
                Reimagined for <br /> Developers.
            </h2>
        </div>
    )
}