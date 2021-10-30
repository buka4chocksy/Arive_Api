import Joi from 'joi';

export default Joi.object({
    name: Joi.string().required().trim(),
    passion_level: Joi.string().valid("LOW", "MEDIUM", "HIGH", "VERY_HIGH"),
    year: Joi.number().required()
})