import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
prisma.$on('query', (e) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log('Query: ' + e.query);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log('Params: ' + e.params);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log('Duration: ' + e.duration + 'ms');
});
