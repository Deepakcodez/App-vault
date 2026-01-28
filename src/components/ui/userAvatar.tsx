import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type props = {
    src: string
    fallbackName?: string
}
export function UserAvatar({ src, fallbackName }: props) {
    return (
        <Avatar>
            <AvatarImage
                src={src}
                alt="avatar"
                className=""
            />
            <AvatarFallback>{fallbackName?.split(" ")[0].slice(0, 2)}</AvatarFallback>
        </Avatar>
    )
}
