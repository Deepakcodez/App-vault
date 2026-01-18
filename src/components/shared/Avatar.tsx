import React from 'react'

type Props = {
    image : string
}

export default function Avatar({ image }: Props) {
    return (
        <div className='size-10  rounded-full overflow-hidden'>
            <img src={image || ""} alt="avatar" />
        </div>
    )
}