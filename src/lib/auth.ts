import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username, admin as adminPlugin, captcha, lastLoginMethod } from "better-auth/plugins"
import prisma from "./prisma";
import { ac, admin, user } from "./permissions"



export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    emailAndPassword: {
        enabled: true,
    },
    plugins: [  
        username(),
        adminPlugin({
            ac,
            roles: {
                admin,
                user,
            }
        }),
        lastLoginMethod({
            storeInDatabase: true,
        }),
        // captcha({
        //     provider: "cloudflare-turnstile",
        //     secretKey: process.env.TURNSTILE_SECRET_KEY!,
        // }),
    ],
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },

});