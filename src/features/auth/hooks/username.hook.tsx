"use client"
import React from 'react'



export const useUserName = () => {
    const [userName, setUserName] = React.useState<string>('')


    const generateUserName = (name: string) => {
        const userName = (name.toLowerCase()).replace(" ", "")
        setUserName((prev) => {
            return userName
        })
        return userName
    }
    return { userName, generateUserName }
}



