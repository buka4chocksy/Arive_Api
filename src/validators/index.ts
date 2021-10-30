import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export default (schema: Joi.ObjectSchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            res.status(400).send({message : "validation error", error})
        }
    }