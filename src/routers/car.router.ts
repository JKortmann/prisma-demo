import express from 'express';
import { prisma } from '../prisma';

const rootPath = '/';

export const carRouter = express.Router();

carRouter.get(rootPath, async (req, res) => {
    const car = await prisma.car.findMany();

    res.json(car);
});

carRouter.get(rootPath + ':id', async (req, res) => {
    const car = await prisma.car.findUnique({
        where: {
            id: req.params.id,
        },
    });

    res.json(car);
});

carRouter.post(rootPath, async (req, res) => {
    const car = await prisma.car.create({
        data: req.body,
    });

    res.json(car);
});

carRouter.put(rootPath + ':id', async (req, res) => {
    const car = await prisma.car.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });

    res.json(car);
});

carRouter.delete(rootPath + ':id', async (req, res) => {
    const car = await prisma.car.delete({
        where: {
            id: req.params.id,
        },
    });

    res.json(car);
});
