import { PrismaClient } from '@/generated/prisma'

// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined
// }

// const db = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV !== 'production') {
//   global.prisma = db
// }

// export default db

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma 