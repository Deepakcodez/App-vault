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
                alt="@shadcn"
                className="grayscale"
            />
            <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
    )
}
