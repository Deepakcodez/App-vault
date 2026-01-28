"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { parseAsBoolean, useQueryState } from 'nuqs'
import React from 'react'


export default function UserName() {
    const [username, setUsername] = useQueryState('username', { defaultValue: "" })
    const [showUserNamePanel, setShowUserNamePanel] = useQueryState('showUserNamePanel', parseAsBoolean.withDefault(false))



    const handleUserNameAvailablity = async (username: string) => {
        const { data: response, error } = await authClient.isUsernameAvailable({
            username: username!, // required
        });
        console.log(response, error)
    }

    React.useEffect(() => {
        handleUserNameAvailablity(username!)
    }, [username])


    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value
        setUsername(username)
        handleUserNameAvailablity(username)
    }


    if (!showUserNamePanel) return;
    if (showUserNamePanel) return (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50'>
            <Card className=''>
                <CardHeader>
                    <CardTitle>Enter your username</CardTitle>
                </CardHeader>
                <CardContent>
                    <label htmlFor="username">Username</label>
                    <Input
                        id="username"
                        placeholder='Enter your username'
                        value={username}
                        onChange={handleUserNameChange}
                    />
                </CardContent>
            </Card>
        </div>
    )
}