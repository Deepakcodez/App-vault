import { use } from "react"

export function ProfileContent({ itemPromise }: { itemPromise: any }) {

    const data = use(itemPromise)

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
