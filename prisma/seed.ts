import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    const lennard = await prisma.person.create({
        data: {
            name: 'Lennard Scheiben',
            // I can only create cars here ... not reference them
            car: {
                create: {
                    name: 'asd',
                },
            },
        },
    });

    const v8Turbo = await prisma.engine.create({
        data: {
            name: 'V8 Turbo',
            horsepower: 187,
            personId: lennard.id,
        },
    });

    const vwGolf = await prisma.car.create({
        data: {
            name: 'VW Golf',
            engineId: v8Turbo.id,
            personId: lennard.id,
        },
    });

    // querying all cars that belong to lennard can't be done via lennard -> query via cars and lennard.id

    // const lennard = await prisma.person.create({
    //     data: {
    //         name: 'Lennard Scheibel',
    //         car: {
    //             create: {
    //                 name: 'VW Golf',
    //                 engine: {
    //                     create: {
    //                         name: 'V8 turbo',
    //                         horsepower: 180,
    //                         // !!! can't set Lennard as inventor !!!
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // });
};
