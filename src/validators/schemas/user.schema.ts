import Joi from 'joi';

export default Joi.object({
    name : Joi.string().required().trim(),
    hobbies : Joi.array().items(Joi.string())
})