import { betterAuthFullSession } from "@/types/auth"
import { use } from "react"

export function ProfileContent({ itemPromise }: { itemPromise: Promise<betterAuthFullSession > }) {

    const data = use(itemPromise)
    console.log(data)
    if (!data) return <p>No session found</p>

    return (
        <div>
            <p>Hello {data?.user?.name}</p>
            <p>{data?.user?.email}</p>
            <p>Verified? {data?.user?.emailVerified ? 'Yes' : 'No'}</p>

            <img
                src={data?.user?.image || ""}
                height={100}
                width={100}
                className="rounded-full mt-4"
            />
        </div>
    )
}
