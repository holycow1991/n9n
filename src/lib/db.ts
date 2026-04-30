import { PrismaClient } from "@/generated/prisma/client"

// Hacky way to avoid hot reload multiple prisma client instances
const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;