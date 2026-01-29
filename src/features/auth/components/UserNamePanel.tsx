"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { parseAsBoolean, useQueryState } from "nuqs";
import React from "react";
import { UserNameSchema } from "../schemas/authschma";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UserNamePanel() {
    const router = useRouter();
    const [username, setUsername] = useQueryState("username", { defaultValue: "" });
    const [showUserNamePanel, setShowUserNamePanel] = useQueryState(
        "showUserNamePanel",
        parseAsBoolean.withDefault(false)
    );
    const [error, setError] = React.useState<string | null>(null);
    const [isAvailable, setIsAvailable] = React.useState<boolean | null>(null);
    const [isChecking, setIsChecking] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const validateUsername = (value: string) => {
        const result = UserNameSchema.safeParse({ username: value });

        if (!result.success) {
            setError(result.error.issues[0].message);
            setIsAvailable(null);
            return false;
        }

        setError(null);
        return true;
    };

    const checkAvailability = async (value: string) => {
        if (!validateUsername(value)) return;

        setIsChecking(true);

        const { data } = await authClient.isUsernameAvailable({
            username: value,
        });

        setIsAvailable(data?.available ?? false);
        setIsChecking(false);
    };

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsername(value);
        checkAvailability(value);
    };

    const handleSubmit = async () => {
        if (!isAvailable) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const { data, error } = await authClient.updateUser({
                username: username.toLowerCase()
            });

            if (error) {
                setError(error.message || "Failed to update username");
                toast.error(error.message || "Failed to update username");
                return;
            }

            toast.success("Username updated successfully");

            router.refresh();

            router.push(`/profile/@${username.toLowerCase()}`);

            setShowUserNamePanel(false);

        } catch (e) {
            toast.error("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    React.useEffect(() => {
        if (showUserNamePanel) {
            checkAvailability(username);
        }
    }, [showUserNamePanel]);

    if (!showUserNamePanel) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="bg-neutral-900 border border-neutral-700 text-white w-[400px]">
                <CardHeader>
                    <CardTitle>Choose a username</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                    <Input
                        placeholder="Enter username"
                        value={username}
                        onChange={handleUserNameChange}
                    />

                    {/* Zod validation error */}
                    {error && (
                        <p className="text-sm text-red-400">{error}</p>
                    )}

                    {/* Availability state */}
                    {!error && isAvailable === true && (
                        <p className="text-sm text-green-400">Username is available ✔</p>
                    )}

                    {!error && isAvailable === false && (
                        <p className="text-sm text-red-400">Username already taken</p>
                    )}

                    {isChecking && (
                        <p className="text-sm text-neutral-400">Checking availability…</p>
                    )}
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full text-black"
                        disabled={!isAvailable}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}